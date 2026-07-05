import Nav from "@/components/Nav";
import Hero from "@/components/hero/Hero";
import Story from "@/components/sections/Story";
import Rooms from "@/components/sections/Rooms";
import Amenities from "@/components/sections/Amenities";
import Experiences from "@/components/sections/Experiences";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Location from "@/components/sections/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Story />
        <Rooms />
        <Amenities />
        <Experiences />
        <Gallery />
        <Testimonials />
        <Location />
      </main>
      <Footer />
    </>
  );
}
