export const site = {
  name: "Ravenala Beach Bungalows",
  shortName: "Ravenala",
  tagline: "A family-run hideaway on the shores of Moalboal since 1997.",
  location: "White Beach, Moalboal, Cebu, Philippines",
  established: 1997,
  bookingUrl: "https://book-directonline.com/properties/ravenalabeachbungalows",
  socials: {
    facebook: "https://www.facebook.com/ravenalabeachbungalowsofficial",
    instagram: "https://www.instagram.com/ravenalabeachbungalows/",
  },
};

export const nav = [
  { label: "Story", href: "#story" },
  { label: "Rooms", href: "#rooms" },
  { label: "Amenities", href: "#amenities" },
  { label: "Experiences", href: "#experiences" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit", href: "#location" },
];

export type Room = {
  name: string;
  guests: string;
  price: number;
  blurb: string;
  features: string[];
  image: string;
  featured?: boolean;
};

export const rooms: Room[] = [
  {
    name: "Double / Twin",
    guests: "2 guests",
    price: 3750,
    blurb:
      "An intimate retreat for couples, wrapped in sea breeze and framed by a private terrace.",
    features: ["Sea or garden view", "Air-conditioned", "Private terrace"],
    image: "/images/room.png",
  },
  {
    name: "Triple Room",
    guests: "3 guests",
    price: 4750,
    blurb:
      "Relaxed space for small groups who want the shoreline just a few footsteps away.",
    features: ["Direct beach access", "Mini-bar", "Free WiFi"],
    image: "/images/room2.png",
  },
  {
    name: "Family Room",
    guests: "4 guests",
    price: 5700,
    blurb:
      "Room to gather, unwind, and let the little ones roam free — kids under seven stay free.",
    features: ["Extra beds available", "Safe & wardrobe", "Garden setting"],
    image: "/images/room4.png",
    featured: true,
  },
  {
    name: "Barkada Room",
    guests: "5 guests",
    price: 6800,
    blurb:
      "The generous choice for friends chasing sunsets, reef dives, and long shared mornings.",
    features: ["Sleeps five", "Beach bar nearby", "Free secured parking"],
    image: "/images/room3.png",
  },
];

export const rateNotes = [
  "All rates are inclusive of breakfast.",
  "Children below seven years old stay free with parents.",
  "Additional guest charged at PHP 1,000 each.",
  "Free secured parking for all guests.",
];

export type AmenityGroup = { title: string; items: string[] };

export const amenities: AmenityGroup[] = [
  {
    title: "In Your Bungalow",
    items: [
      "Air-conditioning",
      "Private terrace",
      "Mini-bar",
      "In-room safe",
      "Wardrobe",
      "Mosquito net",
      "Non-smoking",
    ],
  },
  {
    title: "Comfort & Service",
    items: [
      "Free WiFi in living area",
      "Free secured parking",
      "Airport transfer",
      "Scooter rental",
      "Laundry & ironing",
      "Pets allowed",
      "Currency exchange",
    ],
  },
  {
    title: "Taste & Leisure",
    items: [
      "Al fresco beach bar",
      "Filipino & continental cuisine",
      "Unlimited breakfast coffee",
      "Sunset cocktails",
      "Garden & patio",
      "Hammocks & sun loungers",
    ],
  },
  {
    title: "Wellness & Views",
    items: [
      "In-room massage",
      "Manicure & pedicure",
      "Sea view",
      "Garden view",
      "Direct beach access",
      "Spoken: EN · FIL · NL · DE",
    ],
  },
];

export type Experience = {
  title: string;
  description: string;
  image: string;
};

export const experiences: Experience[] = [
  {
    title: "House Reef Diving",
    description:
      "Our famous house reef is steps from your door — the finest spot for scuba, drifting past turtles and coral gardens.",
    image: "/images/scooba.png",
  },
  {
    title: "Snorkel & Kayak",
    description:
      "Glide over crystal shallows or paddle the calm of Tañon Strait as the light shifts across the water.",
    image: "/images/outdoorbeach.png",
  },
  {
    title: "The Sardine Run",
    description:
      "Minutes away, millions of sardines swirl in living silver clouds — one of Moalboal's great spectacles.",
    image: "/images/outdoor2.png",
  },
  {
    title: "Beyond the Shore",
    description:
      "Canyoneering at Kawasan, waterfall tours, island hopping, and whale watching — we arrange it all for you.",
    image: "/images/bar.png",
  },
];

export const gallery = [
  { src: "/images/outdoorbeach.png", alt: "White Beach shoreline and banca boat at Ravenala" },
  { src: "/images/bar.png", alt: "Al fresco beach bar at Ravenala" },
  { src: "/images/diningfun.png", alt: "Guests dining together by the shore" },
  { src: "/images/outdoor.png", alt: "Garden grounds and bungalows" },
  { src: "/images/scooba.png", alt: "Scuba diving the Moalboal house reef" },
  { src: "/images/staff.png", alt: "The Ravenala family and staff" },
];

export type Testimonial = { quote: string; name: string; stars: number };

export const testimonials: Testimonial[] = [
  {
    quote:
      "Ravenala is a must visit. Definitely the best resort in all of Moalboal! Great service, good food, and a relaxing ambiance. Don't miss your chance to experience paradise.",
    name: "Justive Macaraya",
    stars: 5,
  },
  {
    quote: "Quiet, beautiful, a zen place. Great food. We will visit again.",
    name: "LeRoy Barto",
    stars: 5,
  },
  {
    quote:
      "Feels like our second home — Tita Teresita and her staff are the best!",
    name: "Junna Halper",
    stars: 5,
  },
];
