import { useState, useEffect } from 'react';
import {
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  sendAndConfirmTransaction,
  SystemProgram,
  Transaction,
} from '@solana/web3.js';
import {
  useConnection,
  useWallet,
  WalletContextState,
} from '@solana/wallet-adapter-react';
import {
  createInitializeMint2Instruction,
  createMint,
  getAccount,
  getMinimumBalanceForRentExemptMint,
  getMint,
  getOrCreateAssociatedTokenAccount,
  MINT_SIZE,
  mintTo,
  TOKEN_PROGRAM_ID,
} from '@solana/spl-token';

const CreateNewCoin = async (
  name: FormDataEntryValue | null,
  value: FormDataEntryValue | null,
  email: FormDataEntryValue | null,
  connection: Connection,
  wallet: WalletContextState
) => {
  const payer = wallet.publicKey;
  const mintAuthority = Keypair.generate();
  const freezeAuthority = Keypair.generate();

  if (payer == null) {
    console.log('no payer');
    return;
  }

  const airdropSignature = await connection.requestAirdrop(
    payer,
    LAMPORTS_PER_SOL
  );

  await connection.confirmTransaction(airdropSignature);

  // const mint = await createMint(
  //   connection,
  //   payer,
  //   mintAuthority.publicKey,
  //   freezeAuthority.publicKey,
  //   9 // We are using 9 to match the CLI decimal default exactly
  // );

  // payer: Signer;
  const decimals = 9;
  const keypair = Keypair.generate();
  const programId = TOKEN_PROGRAM_ID;
  const lamports = await getMinimumBalanceForRentExemptMint(connection);

  const transaction = new Transaction().add(
    SystemProgram.createAccount({
      fromPubkey: payer,
      newAccountPubkey: keypair.publicKey,
      space: MINT_SIZE,
      lamports,
      programId,
    }),
    createInitializeMint2Instruction(
      keypair.publicKey,
      decimals,
      mintAuthority.publicKey,
      freezeAuthority.publicKey,
      programId
    )
  );

  const signature = await wallet.sendTransaction(transaction, connection);

  await connection.confirmTransaction(signature, 'processed');

  return keypair.publicKey;
};

const sendTransaction = async (
  wallet: WalletContextState,
  connection: Connection
) => {
  if (wallet.publicKey == null) return null;
  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: wallet.publicKey,
      toPubkey: Keypair.generate().publicKey,
      lamports: 1_000_000,
    })
  );

  const signature = await wallet.sendTransaction(transaction, connection);

  return await connection.confirmTransaction(signature, 'processed');
};

//   console.log(mint.toBase58());
//   // AQoKYV7tYpTrFZN6P5oUufbQKAUr9mNYGe1TTJC9wajM

//   const mintInfo = await getMint(
//     connection,
//     mint
//   )

//   console.log(mintInfo.supply);

//   const tokenAccount = await getOrCreateAssociatedTokenAccount(
//     connection,
//     payer,
//     mint,
//     payer.publicKey
//   );

//   console.log(tokenAccount.address.toBase58());
//   // 7UX2i7SucgLMQcfZ75s3VXmZZY4YRUyJN9X1RgfMoDUi

//   const tokenAccountInfo = await getAccount(connection, tokenAccount.address);

//   await mintTo(
//     connection,
//     payer,
//     mint,
//     tokenAccount.address,
//     mintAuthority,
//     100000000000 // because decimals for the mint are set to 9
//   );

//   console.log(tokenAccountInfo.amount);
//   // 0

//   console.log(mintInfo.supply);
//   // 100

//   console.log(tokenAccountInfo.amount);

//   return;
// };

export default function NewCoin() {
  const [showModal, setShowModal] = useState(false);
  function changeShowModal() {
    setShowModal(!showModal);
  }
  const { connection } = useConnection();
  console.log(connection);
  const wallet = useWallet();
  console.log(wallet);
  async function onSubmitHandler(e: FormData) {
    const name = e.get('name');
    const value = e.get('value');
    const email = e.get('email');
    const baseValue = e.get('value');
    const mint = await CreateNewCoin(name, value, email, connection, wallet);
  }
  async function sendTransaction() {
    if (wallet.publicKey == null) return null;
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: Keypair.generate().publicKey,
        lamports: 1_000_000,
      })
    );

      console.log(transaction,connection);
      const signature = await wallet.sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature, 'processed');
    
  }
  return (
    <div className="absolute">
      <button
        onClick={changeShowModal}
        className="flex border-1 border-white p-2 primary-800 font-heading1 bg-background-50 rounded-3xl m-2"
      >
        Want to create you own Coin?
      </button>
      {showModal ? (
        <div className="absolute flex items-start bg-transparent h-1/2 w-1/4 rounded-2xl">
          <form
            action={onSubmitHandler}
            className="flex flex-col gap-4 p-8 m-8 bg-background-400 rounded-3xl font-body1 text-lg"
          >
            <div onClick={changeShowModal} className="flex basis-0 justify-end">
              X
            </div>
            <label>What do you want to call your Coin?</label>
            <input
              className="p-1 pl-2 rounded-lg"
              placeholder="Name"
              name="name"
              required
            ></input>
            <label>How many coins to mint?</label>
            <input
              className="p-1 pl-2 rounded-lg"
              placeholder="Amount"
              name="amount"
              required
            ></input>
            <label>Set a base price</label>
            <input
              className="p-1 pl-2 rounded-lg"
              placeholder="Coin Name"
              name="basePrice"
              required
            ></input>
            <label>
              Provide email id linked to the youtube account for verification
            </label>
            <input
              className="p-1 pl-2 rounded-lg"
              placeholder="Email"
              name="email"
              required
            ></input>
            <input type="submit" value="Submit" />
          </form>
        </div>
      ) : null}
    </div>
  );
}
