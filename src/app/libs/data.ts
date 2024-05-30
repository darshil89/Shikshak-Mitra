interface Card {
  id: number;
  title: string;
  number: number;
}

export const adminCards: Card[] = [
  {
    id: 1,
    title: "Total Students",
    number: 50,
  },
  {
    id: 2,
    title: "Number of classes today",
    number: 4,
  },
  {
    id: 3,
    title: "Notes Uploaded",
    number: 6,
  },
];

export const studentCards: Card[] = [
  {
    id: 1,
    title: "Total Classes",
    number: 120,
  },
  {
    id: 2,
    title: "Classes Today",
    number: 4,
  },
  {
    id: 3,
    title: "Notes Uploaded",
    number: 9,
  },
];
