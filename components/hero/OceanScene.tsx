"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import * as THREE from "three";

// Shared sun direction (also drives the Sky). Low + slightly off-center (right)
// for a photographic glitter path leading to the horizon.
const SUN = new THREE.Vector3(9, 4.6, -20).normalize();

const vertexShader = /* glsl */ `
  uniform float uTime;

  varying vec3 vWorldPos;
  varying vec3 vNormal;
  varying float vFoam;

  const float G = 9.81;

  // Gerstner wave: dir.xy (horizontal), steepness (z), wavelength (w)
  void gerstner(
    vec4 w, vec2 pos, inout vec3 disp, inout vec3 tangent, inout vec3 binormal,
    inout float steepSum
  ) {
    vec2 d = normalize(w.xy);
    float steep = w.z;
    float L = w.w;
    float k = 6.2831853 / L;
    float c = sqrt(G / k);
    float a = steep / k;
    float f = k * (dot(d, pos) - c * uTime);
    float s = sin(f);
    float co = cos(f);

    disp.x += d.x * a * co;
    disp.z += d.y * a * co;
    disp.y += a * s;

    float WA = k * a;
    tangent += vec3(
      -d.x * d.x * WA * s,
       d.x * WA * co,
      -d.x * d.y * WA * s
    );
    binormal += vec3(
      -d.x * d.y * WA * s,
       d.y * WA * co,
      -d.y * d.y * WA * s
    );
    steepSum += WA * s;
  }

  void main() {
    vec3 pos = position;
    vec3 disp = vec3(0.0);
    vec3 tangent = vec3(1.0, 0.0, 0.0);
    vec3 binormal = vec3(0.0, 0.0, 1.0);
    float steepSum = 0.0;

    gerstner(vec4( 1.0,  0.35, 0.62, 34.0), position.xz, disp, tangent, binormal, steepSum);
    gerstner(vec4( 0.8, -0.90, 0.42, 19.0), position.xz, disp, tangent, binormal, steepSum);
    gerstner(vec4(-0.6,  0.70, 0.36, 11.0), position.xz, disp, tangent, binormal, steepSum);
    gerstner(vec4( 0.3,  1.00, 0.30,  6.5), position.xz, disp, tangent, binormal, steepSum);
    gerstner(vec4(-0.9, -0.20, 0.22,  3.8), position.xz, disp, tangent, binormal, steepSum);

    pos += disp;

    vNormal = normalize(cross(binormal, tangent));
    vFoam = smoothstep(0.55, 1.05, steepSum) * smoothstep(0.4, 1.2, disp.y);

    vec4 world = modelMatrix * vec4(pos, 1.0);
    vWorldPos = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;

  uniform vec3 uSun;
  uniform vec3 uDeep;
  uniform vec3 uShallow;
  uniform vec3 uSky;
  uniform vec3 uSunColor;
  uniform vec3 uFog;
  uniform float uFogNear;
  uniform float uFogFar;

  varying vec3 vWorldPos;
  varying vec3 vNormal;
  varying float vFoam;

  void main() {
    vec3 N = normalize(vNormal);
    vec3 V = normalize(cameraPosition - vWorldPos);
    vec3 L = normalize(uSun);

    // Fresnel (Schlick) — water brightens toward grazing / horizon
    float fres = 0.02 + 0.98 * pow(1.0 - max(dot(N, V), 0.0), 5.0);

    // Base water: deep in troughs, brighter turquoise on faces toward the sky
    float facing = clamp(N.y * 0.5 + 0.5, 0.0, 1.0);
    vec3 water = mix(uDeep, uShallow, facing * 0.8);

    // Reflect the sky as it grazes
    vec3 col = mix(water, uSky, clamp(fres, 0.0, 1.0));

    // Sun specular glitter
    vec3 H = normalize(L + V);
    float spec = pow(max(dot(N, H), 0.0), 220.0);
    float glint = pow(max(dot(N, H), 0.0), 40.0) * 0.25;
    col += uSunColor * (spec * 1.6 + glint);

    // Warm ambient toward the sun on the water
    float sunWrap = pow(max(dot(V, L), 0.0), 3.0) * 0.18;
    col += uSunColor * sunWrap;

    // Foam on the crests
    col = mix(col, vec3(0.92, 0.97, 0.98), clamp(vFoam, 0.0, 1.0));

    // Distance fog → blends far water into the sky for a clean horizon
    float dist = length(cameraPosition - vWorldPos);
    float fog = smoothstep(uFogNear, uFogFar, dist);
    col = mix(col, uFog, fog);

    gl_FragColor = vec4(col, 1.0);
  }
`;

function Ocean() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uSun: { value: SUN.clone() },
      uDeep: { value: new THREE.Color("#053b45") },
      uShallow: { value: new THREE.Color("#12a3a0") },
      uSky: { value: new THREE.Color("#bfe6ea") },
      uSunColor: { value: new THREE.Color("#fff2d8") },
      uFog: { value: new THREE.Color("#cfe9ec") },
      uFogNear: { value: 40 },
      uFogFar: { value: 480 },
    }),
    []
  );

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -40]}>
      <planeGeometry args={[1200, 1200, 220, 220]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

function Rig() {
  const { camera } = useThree();
  const target = useMemo(() => new THREE.Vector3(0, -2.2, -60), []);
  const base = useMemo(() => new THREE.Vector3(0, 4.2, 18), []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const px = state.pointer.x;
    const py = state.pointer.y;
    camera.position.x += (base.x + px * 2.2 - camera.position.x) * 0.03;
    camera.position.y +=
      (base.y + Math.sin(t * 0.35) * 0.25 - py * 1.0 - camera.position.y) * 0.03;
    camera.position.z = base.z;
    camera.lookAt(target);
  });

  return null;
}

export default function OceanScene() {
  return (
    <Canvas
      className="!absolute inset-0"
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      camera={{ position: [0, 4.2, 18], fov: 52, near: 0.1, far: 2000 }}
    >
      <Sky
        sunPosition={[SUN.x, SUN.y, SUN.z]}
        turbidity={3.2}
        rayleigh={2.6}
        mieCoefficient={0.005}
        mieDirectionalG={0.82}
        distance={2000}
      />
      <Rig />
      <Ocean />
    </Canvas>
  );
}
