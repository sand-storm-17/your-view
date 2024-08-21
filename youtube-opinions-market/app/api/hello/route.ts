// import { PublicKey } from '@solana/web3.js';
// import {
//   useConnection,
//   useWallet,
//   WalletContextState,
// } from '@solana/wallet-adapter-react';
// import {
//   Connection,
//   Transaction,
//   SystemProgram,
//   Keypair,
// } from '@solana/web3.js';

// export async function POST(request: Request) {
//   try {
//     const connection = new Connection(request.network, 'confirmed');
//     const publicKey = new PublicKey(request.walletAddress);
//     if (publicKey == null) return null;
//     const transaction = new Transaction().add(
//       SystemProgram.transfer({
//         fromPubkey: publicKey,
//         toPubkey: Keypair.generate().publicKey,
//         lamports: 1000000,
//       })
//     );

//     const latestBlockHash = await connection.getLatestBlockhash();

//     const signature = await connection.sendTransaction(transaction, [{publicKey,secretKey}], connection);

//     return await connection.confirmTransaction(
//       {
//         blockhash: latestBlockHash.blockhash,
//         lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
//         signature: signature,
//       },
//       'processed'
//     );
//   } catch (e) {
//     console.log(e);
//   }
// }
