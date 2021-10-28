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
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-100 hover:bg-opacity-75 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
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
};
