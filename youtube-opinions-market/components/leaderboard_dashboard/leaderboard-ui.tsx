import RankCard from './rank-card';

export default function Leaderboard() {
  return (
    <div className="flex basis-full flex-col gap-2">
      <RankCard name="Pewdiepie" rank={1} />
      <RankCard name="OSnap" rank={2} />
    </div>
  );
}
