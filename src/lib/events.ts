export interface Event {
  id: string;
  name: string;
  location: string;
  startDate: string;
  endDate: string;
  image: string;
  artists: string[];
  slug: string;
}

export const events: Event[] = [
  {
    id: "1",
    name: "Outside Lands",
    location: "San Francisco, CA",
    startDate: "Aug 7, 2026",
    endDate: "Aug 9, 2026",
    image: "https://ext.same-assets.com/451217529/4255118023.webp",
    artists: ["Charli XCX", "The Strokes", "Rufus Du Sol", "Baby Keem", "Empire of the Sun", "Death Cab for Cutie", "Glorilla", "Pinkpantheress", "Disco Lines"],
    slug: "outside-lands"
  },
  {
    id: "2",
    name: "Big Ears",
    location: "Downtown Knoxville, TN",
    startDate: "Mar 26, 2026",
    endDate: "Mar 29, 2026",
    image: "https://ext.same-assets.com/451217529/1466304480.jpeg",
    artists: ["David Byrne", "Robert Plant", "Laurie Anderson", "John Zorn", "Flying Lotus", "Pat Metheny"],
    slug: "big-ears"
  },
  {
    id: "3",
    name: "Beyond Wonderland SoCal",
    location: "San Bernardino, CA",
    startDate: "Mar 27, 2026",
    endDate: "Mar 28, 2026",
    image: "https://ext.same-assets.com/451217529/3828096579.png",
    artists: ["Alison Wonderland", "GRIZ", "Sidepiece", "Sullivan King", "Troyboi", "Zedd", "Eptic"],
    slug: "beyond-wonderland-socal"
  },
  {
    id: "4",
    name: "Country Thunder Arizona",
    location: "Florence, AZ",
    startDate: "Apr 9, 2026",
    endDate: "Apr 12, 2026",
    image: "https://ext.same-assets.com/451217529/848273110.png",
    artists: ["Gavin Adcock", "Lainey Wilson", "Zach Top", "Brooks & Dunn"],
    slug: "country-thunder-arizona"
  },
  {
    id: "5",
    name: "Tortuga",
    location: "Ft. Lauderdale, FL",
    startDate: "Apr 10, 2026",
    endDate: "Apr 12, 2026",
    image: "https://ext.same-assets.com/451217529/618612714.png",
    artists: ["Post Malone", "Riley Green", "Kenny Chesney", "Dustin Lynch", "The Fray", "Ice Cube"],
    slug: "tortuga"
  },
  {
    id: "6",
    name: "Two Step Inn",
    location: "Georgetown, TX",
    startDate: "Apr 18, 2026",
    endDate: "Apr 19, 2026",
    image: "https://ext.same-assets.com/451217529/3743501174.png",
    artists: ["Brooks & Dunn", "Chris Stapleton", "Goo Goo Dolls", "The Red Clay Strays"],
    slug: "two-step-inn"
  },
  {
    id: "7",
    name: "High Water Festival",
    location: "North Charleston, SC",
    startDate: "Apr 18, 2026",
    endDate: "Apr 19, 2026",
    image: "https://ext.same-assets.com/451217529/4080156704.png",
    artists: ["Cage The Elephant", "Mt. Joy", "Hozier"],
    slug: "high-water"
  },
  {
    id: "8",
    name: "Sick New World",
    location: "Las Vegas, NV",
    startDate: "Apr 25, 2026",
    endDate: "Apr 25, 2026",
    image: "https://ext.same-assets.com/451217529/2362589860.png",
    artists: ["System of a Down", "KoRn", "Bring Me The Horizon", "Evanescence", "Marilyn Manson"],
    slug: "sick-new-world"
  },
  {
    id: "9",
    name: "EDC Las Vegas",
    location: "Las Vegas, NV",
    startDate: "May 16, 2026",
    endDate: "May 18, 2026",
    image: "https://ext.same-assets.com/451217529/3150968124.webp",
    artists: ["Above & Beyond", "The Chainsmokers", "FISHER", "John Summit", "Martin Garrix", "Steve Aoki", "Zedd"],
    slug: "edc-las-vegas"
  },
  {
    id: "10",
    name: "BottleRock Napa Valley",
    location: "Napa Valley, CA",
    startDate: "May 22, 2026",
    endDate: "May 24, 2026",
    image: "https://ext.same-assets.com/451217529/1683217750.png",
    artists: ["Foo Fighters", "Backstreet Boys", "Lorde", "Teddy Swims", "LCD Soundsystem", "Lil Wayne"],
    slug: "bottlerock-napa-valley"
  },
  {
    id: "11",
    name: "Welcome To Rockville",
    location: "Daytona Beach, FL",
    startDate: "May 7, 2026",
    endDate: "May 10, 2026",
    image: "https://ext.same-assets.com/451217529/3647848953.png",
    artists: ["Foo Fighters", "My Chemical Romance", "Guns N Roses", "Bring Me The Horizon"],
    slug: "welcome-to-rockville"
  },
  {
    id: "12",
    name: "Governors Ball",
    location: "New York, NY",
    startDate: "Jun 5, 2026",
    endDate: "Jun 7, 2026",
    image: "https://ext.same-assets.com/451217529/980418697.png",
    artists: ["Lorde", "Baby Keem", "Stray Kids", "Kali Uchis", "A$AP Rocky", "Jennie"],
    slug: "governors-ball"
  },
  {
    id: "13",
    name: "Railbird Festival",
    location: "Lexington, KY",
    startDate: "Jun 6, 2026",
    endDate: "Jun 7, 2026",
    image: "https://ext.same-assets.com/451217529/429978876.png",
    artists: ["The Lumineers", "Tyler Childers", "Caamp", "Mt. Joy", "Zach Top", "Ella Langley"],
    slug: "railbird-festival"
  },
  {
    id: "14",
    name: "Forbidden Kingdom",
    location: "Orlando, FL",
    startDate: "Apr 25, 2026",
    endDate: "Apr 26, 2026",
    image: "https://ext.same-assets.com/451217529/1934732442.jpeg",
    artists: ["Subtronics", "Zeds Dead", "Boogie T", "Liquid Stranger", "Getter", "Space Laces"],
    slug: "forbidden-kingdom"
  },
  {
    id: "15",
    name: "BeachLife Festival",
    location: "Redondo Beach, CA",
    startDate: "May 1, 2026",
    endDate: "May 3, 2026",
    image: "https://ext.same-assets.com/451217529/2097341205.jpeg",
    artists: ["Duran Duran", "The Chainsmokers", "Grouplove", "The Offspring", "Slightly Stoopid", "James Taylor"],
    slug: "beachlife-festival"
  }
];

export const heroSlides = [
  {
    id: "outside-lands",
    name: "Outside Lands",
    dates: "Aug 7 - 9, 2026",
    image: "https://ext.same-assets.com/451217529/4255118023.webp",
    bgImage: "https://ext.same-assets.com/451217529/1466304480.jpeg"
  },
  {
    id: "edc-las-vegas",
    name: "EDC Las Vegas",
    dates: "May 16 - 18, 2026",
    image: "https://ext.same-assets.com/451217529/3150968124.webp",
    bgImage: "https://ext.same-assets.com/451217529/367972299.jpeg"
  },
  {
    id: "bottlerock-napa-valley",
    name: "BottleRock Napa Valley",
    dates: "May 22 - 24, 2026",
    image: "https://ext.same-assets.com/451217529/1683217750.png",
    bgImage: "https://ext.same-assets.com/451217529/1990790894.jpeg"
  },
  {
    id: "governors-ball",
    name: "Governors Ball",
    dates: "Jun 5 - 7, 2026",
    image: "https://ext.same-assets.com/451217529/980418697.png",
    bgImage: "https://ext.same-assets.com/451217529/970836124.jpeg"
  },
  {
    id: "welcome-to-rockville",
    name: "Welcome To Rockville",
    dates: "May 7 - 10, 2026",
    image: "https://ext.same-assets.com/451217529/3647848953.png",
    bgImage: "https://ext.same-assets.com/451217529/4154732578.jpeg"
  }
];
