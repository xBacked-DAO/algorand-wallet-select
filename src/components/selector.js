import React, { useState } from 'react'
import PropTypes from 'prop-types';

import { Modal } from './modal'
import { ProvideWallet, useWallet } from '../context/ProvideWallet'

/**
 * Primary UI component for user interaction
 */
export const Selector = ({ returnWallet }) => {
  return (
    <div>
      <ProvideWallet>
        <SelectorContent returnWallet={returnWallet} />
      </ProvideWallet>
    </div>
  );
};

const SelectorContent = ({ returnWallet }) => {
  let [isOpen, setIsOpen] = useState(false)
  const { wallet } = useWallet();

  function closeModal(walletInfo) {
    setIsOpen(false)
    returnWallet(walletInfo)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Connect wallet
        </button>
      </div>
      {!!wallet && (<p>{JSON.stringify(wallet)}</p>)}
      <Modal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

Selector.propTypes = {
  returnWallet: PropTypes.func,
};
