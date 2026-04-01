export interface Event {
  id: string;
  name: string;
  location: string;
  startDate: string;
  endDate: string;
  image: string;
  artists: string[];
  slug: string;
  status: string;
}

export const FESTIVAL_EVENTS: Event[] = [
  {
    id: "1",
    name: "Tortuga Music Festival",
    location: "Ft. Lauderdale, FL",
    startDate: "2026-04-10",
    endDate: "2026-04-12",
    image: "https://ext.same-assets.com/451217529/6188217214.png",
    artists: ["Post Malone", "Kenny Chesney", "Chris Stapleton"],
    slug: "tortuga",
    status: "On Sale"
  },
  {
    id: "2",
    name: "Two Step Inn",
    location: "Georgetown, TX",
    startDate: "2026-04-18",
    endDate: "2026-04-19",
    image: "https://ext.same-assets.com/451217529/1741503174.png",
    artists: ["Brooks & Dunn", "Chris Stapleton"],
    slug: "two-step-inn",
    status: "On Sale"
  },
  {
    id: "3",
    name: "High Water Festival",
    location: "North Charleston, SC",
    startDate: "2026-04-26",
    endDate: "2026-04-27",
    image: "https://ext.same-assets.com/451217529/4880156784.png",
    artists: ["Lord Huron", "Mt. Joy"],
    slug: "high-water",
    status: "Presale"
  },
  {
    id: "4",
    name: "Kilby Block Party",
    location: "Salt Lake City, UT",
    startDate: "2026-05-09",
    endDate: "2026-05-11",
    image: "https://ext.same-assets.com/451217529/5521478963.png",
    artists: ["LCD Soundsystem", "Interpol"],
    slug: "kilby-block-party",
    status: "On Sale"
  },
  {
    id: "5",
    name: "EDC Las Vegas",
    location: "Las Vegas, NV",
    startDate: "2026-05-16",
    endDate: "2026-05-18",
    image: "https://ext.same-assets.com/451217529/3150868124.webp",
    artists: ["Various Artists"],
    slug: "edc-lv",
    status: "Sold Out"
  }
  // Add more here following the same pattern
];
  }
];
