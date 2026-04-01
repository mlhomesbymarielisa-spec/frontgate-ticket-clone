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
    name: "Big Ears Festival",
    location: "Knoxville, TN",
    startDate: "2026-03-26",
    endDate: "2026-03-29",
    image: "https://ext.same-assets.com/451217529/1466304480.jpeg",
    artists: ["David Byrne", "Robert Plant"],
    slug: "big-ears",
    status: "On Sale"
  },
  {
    id: "2",
    name: "Tortuga Music Festival",
    location: "Ft. Lauderdale, FL",
    startDate: "2026-04-10",
    endDate: "2026-04-12",
    image: "https://ext.same-assets.com/451217529/6188217214.png",
    artists: ["Post Malone", "Kenny Chesney"],
    slug: "tortuga",
    status: "On Sale"
  },
  {
    id: "3",
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
    id: "4",
    name: "High Water Festival",
    location: "North Charleston, SC",
    startDate: "2026-04-26",
    endDate: "2026-04-27",
    image: "https://ext.same-assets.com/451217529/4880156784.png",
    artists: ["Lord Huron", "Mt. Joy"],
    slug: "high-water",
    status: "On Sale"
  },
  {
    id: "5",
    name: "Sick New World",
    location: "Las Vegas, NV",
    startDate: "2026-04-25",
    endDate: "2026-04-25",
    image: "https://ext.same-assets.com/451217529/2362598660.png",
    artists: ["System of a Down", "Slipknot"],
    slug: "sick-new-world",
    status: "Limited"
  },
  {
    id: "6",
    name: "Welcome To Rockville",
    location: "Daytona Beach, FL",
    startDate: "2026-05-07",
    endDate: "2026-05-10",
    image: "https://ext.same-assets.com/451217529/3647848953.png",
    artists: ["Foo Fighters", "Guns N' Roses"],
    slug: "welcome-to-rockville",
    status: "On Sale"
  },
  {
    id: "7",
    name: "EDC Las Vegas",
    location: "Las Vegas Motor Speedway, NV",
    startDate: "2026-05-16",
    endDate: "2026-05-18",
    image: "https://ext.same-assets.com/451217529/3150868124.webp",
    artists: ["Tiesto", "Fisher"],
    slug: "edc-las-vegas",
    status: "Sold Out"
  },
  {
    id: "8",
    name: "BottleRock Napa Valley",
    location: "Napa Valley, CA",
    startDate: "2026-05-22",
    endDate: "2026-05-24",
    image: "https://ext.same-assets.com/451217529/1683217750.png",
    artists: ["Pearl Jam", "Ed Sheeran"],
    slug: "bottlerock-napa-valley",
    status: "On Sale"
  },
  {
    id: "9",
    name: "Governors Ball",
    location: "New York, NY",
    startDate: "2026-06-05",
    endDate: "2026-06-07",
    image: "https://ext.same-assets.com/451217529/888418697.png",
    artists: ["SZA", "Post Malone"],
    slug: "governors-ball",
    status: "On Sale"
  },
  {
    id: "10",
    name: "Bonnaroo",
    location: "Manchester, TN",
    startDate: "2026-06-11",
    endDate: "2026-06-14",
    image: "https://ext.same-assets.com/451217529/199790804.png",
    artists: ["Red Hot Chili Peppers", "Fred again.."],
    slug: "bonnaroo",
    status: "On Sale"
  }
];
