import React from 'react'

export const WalletButton = ({ info, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="ws-bg-white ws-flex ws-flex-col ws-pt-3 ws-pb-2 ws-justify-center ws-items-center ws-rounded-md ws-shadow-md hover:ws-shadow-lg hover:ws-bg-gray-50 focus:ws-outline-none"
    >
      <img src={info.logo} className="ws-object-center ws-object-cover ws-rounded-full ws-h-14 ws-w-14" />
      <p className="ws-text-lg ws-font-semibold ws-text-gray-700 ws-mt-1">
        {info.name}
      </p>
    </button>
  );
}

export default WalletButton;