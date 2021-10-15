import React, { useState } from 'react'
import PropTypes from 'prop-types';

import { Modal } from './modal'

/**
 * Primary UI component for user interaction
 */
export const Selector = ({ returnWallet }) => {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal(walletData) {
    setIsOpen(false)
    returnWallet(walletData)
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
      <Modal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

Selector.propTypes = {
  returnWallet: PropTypes.func,
};
