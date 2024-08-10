import { useState } from 'react';

export default function NewCoin() {
  const [showModal, setShowModal] = useState(true);
  function changeShowModal() {
    setShowModal(!showModal);
  }
  return (
    <>
      <button
        onClick={changeShowModal}
        className="flex border-1 border-white p-2 primary-800 font-heading1 bg-background-50 rounded-3xl m-2"
      >
        Want to create you own Coin?
      </button>
      {showModal ? (
          <div className="flex justify-center items-start absolute bg-transparent h-1/2 w-1/4 rounded-2xl">
            
            <form className="flex flex-col gap-4 p-8 m-8 bg-background-400 rounded-3xl font-body1 text-lg">
            <div onClick={changeShowModal} className='flex basis-0 justify-end'>X</div>
              <label>What do you want to call your Coin?</label>
              <input
                className="p-1 pl-2 rounded-lg"
                placeholder="Name"
              ></input>
              <label>How many coins to mint?</label>
              <input
                className="p-1 pl-2 rounded-lg"
                placeholder="Amount"
              ></input>
              <label>Set a base price</label>
              <input
                className="p-1 pl-2 rounded-lg"
                placeholder="Coin Name"
              ></input>
              <label>
                Provide email id linked to the youtube account for verification
              </label>
              <input
                className="p-1 pl-2 rounded-lg"
                placeholder="Email"
              ></input>
              <button>Submit</button>
            </form>
          </div>
      ) : null}
    </>
  );
}
