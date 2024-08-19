import { Key } from 'react';
import RankCard from './rank-card';

const getYoutubers = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/youtubers', {
      cache: 'default',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch youtubers');
    }
    return res.json();
  } catch (error) {
    console.log('Error loading youtubers');
  }
};

export default async function Leaderboard() {
  const { youtubers } = await getYoutubers();

  return (
    <div className="flex basis-full flex-col gap-2 overflow-hidden">
      {youtubers.map(
        (
          youtuber: { id: Key; channelName: string; subscriberCount: number },
          index: number
        ) => (
          // eslint-disable-next-line react/jsx-key
          <RankCard
            key={index}
            rank={index + 1}
            name={youtuber.channelName}
            subscribers={youtuber.subscriberCount}
          />
        )
      )}
    </div>
  );
}
