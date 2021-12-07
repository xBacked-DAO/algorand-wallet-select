import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

import { Modal } from './modal'
import { ProvideWallet, useWallet } from '../context/ProvideWallet';

/**
 * Primary UI component for user interaction
 */
export const WalletSelector = ({ returnWallet, wallets = [] }) => {
  return (
    <div>
      <ProvideWallet>
        <SelectorContent returnWallet={returnWallet} validWallets={wallets} />
      </ProvideWallet>
    </div>
  );
};

const SelectorContent = ({ returnWallet, validWallets }) => {
  let [isOpen, setIsOpen] = useState(false)
  const { setValidWallets } = useWallet();

  useEffect(() => {
    setValidWallets(validWallets);
  }, [validWallets]);

  const closeModal = (walletInfo) => {
    setIsOpen(false)
    returnWallet(walletInfo)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <>
      <div className="ws-flex ws-items-center ws-justify-center">
        <button
          type="button"
          onClick={openModal}
          className="ws-px-4 ws-py-2 ws-text-sm ws-font-medium ws-text-white ws-bg-black ws-rounded-md ws-bg-opacity-100 ws-hover:bg-opacity-75 ws-focus:outline-none ws-focus-visible:ring-2 ws-focus-visible:ring-white ws-focus-visible:ring-opacity-75"
        >
          Connect wallet
        </button>
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

WalletSelector.propTypes = {
  returnWallet: PropTypes.func,
  wallets: PropTypes.array
};
