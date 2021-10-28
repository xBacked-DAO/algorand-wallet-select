import React from 'react'

export const WalletButton = ({ info, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="xcard bg-white flex flex-col p-2 justify-center items-center rounded-md shadow hover:shadow-md focus:outline-none"
    >
      <img src={info.logo} className="object-center object-cover rounded-full h-20 w-20" />
      <p className="text-lg font-bold">
        {info.name}
      </p>
    </button>
  );
}

export default WalletButton;