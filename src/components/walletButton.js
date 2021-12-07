import React from 'react'

export const WalletButton = ({ info, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="ws-xcard bg-white ws-flex ws-flex-col ws-p-2 ws-justify-center ws-items-center ws-rounded-md ws-shadow ws-hover:shadow-md ws-focus:outline-none"
    >
      <img src={info.logo} className="ws-object-center ws-object-cover ws-rounded-full ws-h-20 ws-w-20" />
      <p className="ws-text-lg ws-font-bold">
        {info.name}
      </p>
    </button>
  );
}

export default WalletButton;