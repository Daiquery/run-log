export interface Run {
  id: string;
  date?: string;
  distance?: string;
  time?: string;
}

export const RUNS: Run[] = [
  {
    id: "1",
    date: new Date("1/7/21").toLocaleDateString("en-US"),
    distance: "2.5",
    time: "17:54"
  },
  {
    id: "2",
    date: new Date("1/7/21").toLocaleDateString("en-US"),
    distance: "2.5",
    time: "16:42"
  },
  {
    id: "3",
    date: new Date("1/7/21").toLocaleDateString("en-US"),
    distance: "2.5",
    time: "16:42"
  },
  {
    id: "4",
    date: new Date("1/7/21").toLocaleDateString("en-US"),
    distance: "2.5",
    time: "16:42"
  },
  {
    id: "5",
    date: new Date("1/7/21").toLocaleDateString("en-US"),
    distance: "2.5",
    time: "16:42"
  },
  {
    id: "6",
    date: new Date("1/7/21").toLocaleDateString("en-US"),
    distance: "2.5",
    time: "16:42"
  }
];
