import RankCard from "./rank-card";

const youtubers = [
  {
    name: "Harkirat Singh",
    subscriber: "200 million+",
    rank: 1
  },
  {
    name: "Samay Raina",
    subscriber: "100 million+",
    rank: 2,
  },
  {
    name: "MrBeast",
    subscribers: "100 million+",
    rank: 3,
  },
  {
    name: "Anastasia Radzinskaya (Like Nastya)",
    subscribers: "95 million+",
    rank: 4,
  },
  {
    name: "PewDiePie",
    subscribers: "90 million+",
    rank: 5,
  },
  {
    name: "T-Series",
    subscribers: "85 million+",
    rank: 6,
  },
  {
    name: "Ryan ToysReview",
    subscribers: "75 million+",
    rank: 7,
  },
  {
    name: "Dude Perfect",
    subscribers: "65 million+",
    rank: 8,
  }
];

export default function Leaderboard() {
  return (
    <div className="flex basis-full flex-col gap-2 overflow-hidden">
      {youtubers.map((youtuber) => {
        return <RankCard key={youtuber.rank} name={youtuber.name} rank={youtuber.rank} />
      })}
    </div>
  );
}