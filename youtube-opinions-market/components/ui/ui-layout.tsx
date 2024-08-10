'use client';

import { WalletButton } from '../solana/solana-provider';
import * as React from 'react';
import Link from 'next/link';
import { ReactNode } from 'react';
import { GrAd } from 'react-icons/gr';

import { ClusterUiSelect } from '../cluster/cluster-ui';

export function UiLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-full flex flex-col">
      <div className="bg-background-500 p-4 flex justify-between items-center">
        <button className="logo">
          <GrAd size={32} />
        </button>
        <div className="flex-none space-x-2">
          <WalletButton />
          <ClusterUiSelect />
        </div>
      </div>
      <div className="flex-grow mx-4 lg:mx-auto">{children}</div>
    </div>
  );
}
