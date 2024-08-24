import { CoinCard } from './coinCard';
import { Key } from 'react';

const getUsers = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/users', {
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

export default async function Dashboard() {
  const { users } = await getUsers();

  return (
    <>
      <div className="flex basis-full flex-col gap-2">
        {users.map(
          (
            user: { id: Key; coinName: string; valueOfCoin: number },
            index: number
          ) => (
            <CoinCard
              key={index + 1}
              name={user.coinName}
              image="pp"
              amount={user.valueOfCoin}
            />
          )
        )}
      </div>
    </>
  );
}
