import {
  useConnection,
  useWallet,
  WalletContextState,
} from '@solana/wallet-adapter-react';
import {
  Connection,
  Transaction,
  SystemProgram,
  Keypair,
} from '@solana/web3.js';
import { useAnchorProvider } from '../solana/solana-provider';

const wallet = useWallet();
const {connection} = useConnection();

export const sendTransaction = async () => {
  'use server'
  if (wallet.publicKey == null) return null;
  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: wallet.publicKey,
      toPubkey: Keypair.generate().publicKey,
      lamports: 1000000,
    })
  );


  const latestBlockHash = await connection.getLatestBlockhash();

  const signature = await wallet.sendTransaction(transaction, connection);

  await connection.confirmTransaction(
    {
      blockhash: latestBlockHash.blockhash,
      lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
      signature: signature,
    },
    'processed'
  );
  return; 
};
