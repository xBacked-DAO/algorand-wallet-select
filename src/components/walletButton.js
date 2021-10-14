import React from 'react'

export const WalletButton = ({ info, onClick }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={info.logo} className="object-center object-cover rounded-full h-24 w-24 mb-2" />
      <p className="text-lg font-bold mb-2">
        {info.name}
      </p>
    </div>
  );
}

export default WalletButton;