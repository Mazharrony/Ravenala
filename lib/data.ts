export const site = {
  name: "Ravenala Beach Bungalows",
  shortName: "Ravenala",
  tagline: "A family-run hideaway on the shores of Moalboal since 1997.",
  location: "White Beach, Moalboal, Cebu, Philippines",
  established: 1997,
  bookingUrl: "https://book-directonline.com/properties/ravenalabeachbungalows",
  email: "info@ravenalabeach.com",
  phone: "+639369979697",
  address: {
    barangay: "Brgy. Saavedra",
    city: "Moalboal",
    island: "Cebu Island",
    country: "Philippines",
  },
  mapsUrl: "https://www.google.com/maps?cid=7645962946630375798",
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
  /** First entry is used as the card image. */
  images: { src: string; alt: string }[];
  featured?: boolean;
};

export const rooms: Room[] = [
  {
    name: "Standard Room",
    guests: "2 guests",
    price: 3750,
    blurb:
      "Simple comfort with everything you need, overlooking the garden and a few meters from the sand.",
    features: ["Garden view", "Air-conditioned", "Private terrace"],
    images: [
      {
        src: "/images/rooms/double-queen/01-wide.jpg",
        alt: "Double room with queen-sized bed and garden doorway",
      },
      {
        src: "/images/rooms/double-queen/02-wide2.jpg",
        alt: "Queen-sized bed and seating area in the double room",
      },
      {
        src: "/images/rooms/double-queen/03-wide3.jpg",
        alt: "Double room with mosquito net and open terrace door",
      },
      {
        src: "/images/rooms/double-queen/04-bath.jpg",
        alt: "Tiled bathroom with hot and cold shower in the double room",
      },
      {
        src: "/images/rooms/double-twin/01-wide.jpg",
        alt: "Twin room with two single beds and a garden view",
      },
      {
        src: "/images/rooms/double-twin/02-wide2.jpg",
        alt: "Two single beds beneath the air-conditioning unit",
      },
      {
        src: "/images/rooms/double-twin/03-wide3.jpg",
        alt: "Twin room interior with terracotta floor",
      },
      {
        src: "/images/rooms/double-twin/04-bath.jpg",
        alt: "Bathroom with walk-in shower in the twin room",
      },
    ],
  },
  {
    name: "Seaview Bungalow",
    guests: "2 guests",
    price: 4000,
    blurb:
      "A private entrance and balcony right on the beach — the perfect place to unwind in the ocean breeze.",
    features: ["Sea view", "Beachfront balcony", "Private entrance"],
    images: [
      {
        src: "/images/rooms/seaview-bungalow/01-wide.jpg",
        alt: "Seaview bungalow with a double bed and an extra single bed",
      },
      {
        src: "/images/rooms/seaview-bungalow/02-wide2.jpg",
        alt: "Seaview bungalow interior beneath a peaked bungalow ceiling",
      },
      {
        src: "/images/rooms/seaview-bungalow/03-seaview.jpg",
        alt: "Seaview bungalow looking out to the sea through an open door",
      },
      {
        src: "/images/rooms/seaview-bungalow/04-seaview2.jpg",
        alt: "Bed framed by the sea view from the seaview bungalow",
      },
      {
        src: "/images/rooms/seaview-bungalow/05-bed.jpg",
        alt: "Made-up bed with bedside lamps in the seaview bungalow",
      },
      {
        src: "/images/rooms/seaview-bungalow/06-bed2.jpg",
        alt: "Seaview bungalow with curtained windows and tiled floor",
      },
      {
        src: "/images/rooms/seaview-bungalow/07-beds.jpg",
        alt: "Two beds turned down with towel swans",
      },
      {
        src: "/images/rooms/seaview-bungalow/08-swans.jpg",
        alt: "Towel swans and hibiscus flowers on the bed",
      },
      {
        src: "/images/rooms/seaview-bungalow/09-swans2.jpg",
        alt: "Towel art laid out across the bed in the seaview bungalow",
      },
      {
        src: "/images/rooms/seaview-bungalow/10-single.jpg",
        alt: "Single bed and air-conditioning in the seaview bungalow",
      },
      {
        src: "/images/rooms/seaview-bungalow/11-swans3.jpg",
        alt: "Close view of towel swans on the seaview bungalow bed",
      },
      {
        src: "/images/rooms/seaview-bungalow/12-bath.jpg",
        alt: "Bathroom with basin and shower in the seaview bungalow",
      },
    ],
  },
  {
    name: "Family Room",
    guests: "4 guests",
    price: 5700,
    blurb:
      "Room to gather, unwind, and let the little ones roam free — kids under seven stay free.",
    features: ["Extra beds available", "Safe & wardrobe", "Garden setting"],
    images: [
      {
        src: "/images/rooms/family/01-wide.jpg",
        alt: "Family room with four-poster bed and garden-facing windows",
      },
      {
        src: "/images/rooms/family/02-wide2.jpg",
        alt: "Family room with wardrobe, safe, and bamboo detailing",
      },
      {
        src: "/images/rooms/family/03-wide3.jpg",
        alt: "Wide view of the family room and its louvred windows",
      },
      {
        src: "/images/rooms/family/04-bunk.jpg",
        alt: "Extra bed for children beside the main bed",
      },
      {
        src: "/images/rooms/family/05-bath.jpg",
        alt: "Family room bathroom with twin basins",
      },
    ],
    featured: true,
  },
  {
    name: "Barkada Room",
    guests: "5 guests",
    price: 6800,
    blurb:
      "The generous choice for friends chasing sunsets, reef dives, and long shared mornings.",
    features: ["Sleeps five", "Beach bar nearby", "Free secured parking"],
    images: [
      {
        src: "/images/rooms/barkada/01-wide.jpg",
        alt: "Barkada room sleeping five under a high blue ceiling",
      },
      {
        src: "/images/rooms/barkada/02-door.jpg",
        alt: "Barkada room with wooden door and terracotta floor",
      },
      {
        src: "/images/rooms/barkada/03-twins.jpg",
        alt: "Twin beds turned down with towel swans in the barkada room",
      },
      {
        src: "/images/rooms/barkada/04-twins2.jpg",
        alt: "Beds and desk beside the garden doorway",
      },
      {
        src: "/images/rooms/barkada/05-bed.jpg",
        alt: "Double bed with towel swans in the barkada room",
      },
      {
        src: "/images/rooms/barkada/06-bed2.jpg",
        alt: "Bed with green curtains and a sea painting above",
      },
      {
        src: "/images/rooms/barkada/07-bed3.jpg",
        alt: "Turned-down bed in the barkada room",
      },
      {
        src: "/images/rooms/barkada/08-corner.jpg",
        alt: "Corner of the barkada room with air-conditioning",
      },
      {
        src: "/images/rooms/barkada/09-bath.jpg",
        alt: "Barkada room bathroom with basin and round mirror",
      },
      {
        src: "/images/rooms/barkada/10-terrace.jpg",
        alt: "Shaded terrace and seating outside the barkada bungalow",
      },
    ],
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
      "Hot & cold shower",
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
    image: "/images/outdoorbeach.png",
  },
  {
    title: "Snorkel & Kayak",
    description:
      "Glide over crystal shallows or paddle the calm of Tañon Strait as the light shifts across the water.",
    image: "/images/property/beach-loungers.jpg",
  },
  {
    title: "The Sardine Run",
    description:
      "Minutes away, millions of sardines swirl in living silver clouds — one of Moalboal's great spectacles.",
    image: "/images/scooba.png",
  },
  {
    title: "Beyond the Shore",
    description:
      "Canyoneering at Kawasan, waterfall tours, island hopping, and whale watching — we arrange it all for you.",
    image: "/images/gmaps1.jpg",
  },
];

export const gallery = [
  {
    src: "/images/property/beachfront.jpg",
    width: 2000,
    height: 1500,
    alt: "The Ravenala Beach Cafe sign and shaded tables on White Beach",
  },
  {
    src: "/images/property/beach-loungers.jpg",
    width: 1916,
    height: 2000,
    alt: "Sun loungers and a banca boat on the shoreline",
  },
  {
    src: "/images/property/palms-sunset.jpg",
    width: 1500,
    height: 2000,
    alt: "Palm silhouettes against a sunset over Tañon Strait",
  },
  {
    src: "/images/property/beach-bar.jpg",
    width: 1500,
    height: 2000,
    alt: "The al fresco beach bar beneath its nipa roof",
  },
  {
    src: "/images/property/garden-path.jpg",
    width: 1500,
    height: 2000,
    alt: "Stepping-stone path winding through the garden to the bungalows",
  },
  {
    src: "/images/property/nipa-loungers.jpg",
    width: 1500,
    height: 2000,
    alt: "A nipa hut and sun loungers looking out to the water",
  },
  {
    src: "/images/property/sunset-shore.jpg",
    width: 2000,
    height: 1500,
    alt: "Sunset over the sea with Negros Island on the horizon",
  },
  {
    src: "/images/property/long-table.jpg",
    width: 1500,
    height: 2000,
    alt: "The long dining table set beneath the thatched roof",
  },
  {
    src: "/images/property/garden.jpg",
    width: 2000,
    height: 1500,
    alt: "Lush tropical garden surrounding the bungalows",
  },
  {
    src: "/images/property/shoreline.jpg",
    width: 1500,
    height: 2000,
    alt: "Loungers in the shade of the trees at the water's edge",
  },
  {
    src: "/images/property/terrace-view.jpg",
    width: 1500,
    height: 2000,
    alt: "The resort dog on the terrace overlooking the sea",
  },
  {
    src: "/images/property/sunset-palms.jpg",
    width: 1500,
    height: 2000,
    alt: "Sun setting through the palms over calm water",
  },
  {
    src: "/images/property/bungalow-palms.jpg",
    width: 1500,
    height: 2000,
    alt: "A bungalow nestled among the palms",
  },
  {
    src: "/images/property/sign.jpg",
    width: 1500,
    height: 2000,
    alt: "The hand-carved Ravenala sign on a coral stone wall",
  },
  {
    src: "/images/property/hammock.jpg",
    width: 1125,
    height: 2000,
    alt: "A hammock strung between the trees by the beach",
  },
  {
    src: "/images/property/restaurant.jpg",
    width: 1125,
    height: 2000,
    alt: "The open-air restaurant and sand path through the grounds",
  },
  {
    src: "/images/property/garden-puppy.jpg",
    width: 1500,
    height: 2000,
    alt: "A puppy waiting on the garden path",
  },
  {
    src: "/images/property/sunset-clouds.jpg",
    width: 1500,
    height: 2000,
    alt: "Evening clouds drifting over Tañon Strait",
  },
  {
    src: "/images/property/lawn.jpg",
    width: 1500,
    height: 2000,
    alt: "The lawn and stepping stones between the bungalows",
  },
  {
    src: "/images/property/beach-dog.jpg",
    width: 1501,
    height: 2000,
    alt: "The resort dog watching the sea from the sand",
  },
];

/** Full-width panorama used as a section band. */
export const panorama = {
  src: "/images/property/beach-panorama.jpg",
  alt: "Panorama of White Beach and the bungalows at Ravenala",
};

export type Testimonial = { quote: string; name: string; stars: number };

export const testimonials: Testimonial[] = [
  {
    quote:
      "Service from the staff is impeccable...made to feel like you're the VIP here. Had the bungalow that was 20 steps away from the beach...and right next to the bar!",
    name: "Nemesio Diego",
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
