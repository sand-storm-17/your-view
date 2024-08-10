'use client';
import { useState } from 'react';
import Leaderboard from './leaderboard-ui';
import Dashboard from './dashboard';
import DashboardFeature from '../dashboard/dashboard-feature';
import { SolanaProvider, WalletButton } from '../solana/solana-provider';
import { ClusterUiSelect } from '../cluster/cluster-ui';
import { ClusterProvider } from '../cluster/cluster-data-access';
import NewCoin from './new-coin';

export default function Window() {
  const [currentWindow, setCurrentWindow] = useState('Leaderboard');

  function changetoLeaderboard() {
    setCurrentWindow('Leaderboard');
  }

  function changetoDashboard() {
    setCurrentWindow('Dashboard');
  }

  return (
    <>
      <div className="bg-background-800 flex justify-center items-center w-full h-full ">
        <NewCoin/>
        <div className="flex flex-col w-2/5 h-2/3 bg-background-100 border-none justify-center rounded-xl ">
          <div className="flex m-5 justify-center">
            <div className="flex items-center">
              <button
                onClick={changetoLeaderboard}
                className="flex font-heading1 text-2xl border rounded-l-2xl py-2 px-6 active:bg-background-800 hover:bg-primary-500"
              >
                Leaderboard
              </button>
              <button
                onClick={changetoDashboard}
                className="flex font-heading1 text-2xl border rounded-r-2xl py-2 px-6 active:bg-background-800 hover:bg-primary-500"
              >
                Dashboard
              </button>
            </div>
          </div>
          <div className="flex basis-5/6">
            {currentWindow == 'Leaderboard' ? <Leaderboard /> : <Dashboard />}
          </div>
        </div>
      </div>
    </>
  );
}

