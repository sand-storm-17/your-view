import { MdKeyboardDoubleArrowUp } from 'react-icons/md';

interface RankProps{
   name: string; rank: number 
}


export default function RankCard(props: RankProps) {

  

  return (
    <div className="flex gap-2 border border-none bg-accent-200 mx-10 px-10 py-2 justify-between rounded-tr-lg rounded-bl-lg font-heading text-md shadow-sm shadow-accent-500">
      <div className="flex items-center">
        <MdKeyboardDoubleArrowUp />
        {props.rank}
      </div>
      <div className="flex-1 ">{props.name}</div>
      <div className="flex-1">100,000</div>
      <div className='flex gap-2'>
        <button className="flex-1 px-2 rounded-lg hover:bg-white bg-green-600 text-black">
          Buy
          
        </button>
        <button className="flex-1 px-2 rounded-lg hover:bg-white bg-red-600 text-black">
          Sell
        </button>
      </div>
    </div>
  );
}
