import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

import { Modal } from './modal'
import { ProvideWallet, useWallet } from '../context/ProvideWallet';

/**
 * Primary UI component for user interaction
 */
export const WalletSelector = ({ children, returnWallet, wallets = [] }) => {
  return (
    <div>
      <ProvideWallet>
        <SelectorContent returnWallet={returnWallet} wallets={wallets}>
          {children}
        </SelectorContent>
      </ProvideWallet>
    </div>
  );
};

const DefaultButton = (props) => (
  <button
    type="button"
    className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-100 hover:bg-opacity-75 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    {...props}
  >
    Connect wallet
  </button>
);

const SelectorContent = ({ children, returnWallet, wallets }) => {
  let [isOpen, setIsOpen] = useState(false)
  const { setValidWallets } = useWallet();

  useEffect(() => {
    setValidWallets(wallets);
  }, [wallets]);

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
        {Boolean(children)
          ? React.cloneElement(children, { onClick: openModal })
          : <DefaultButton onClick={openModal} />
        }
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

WalletSelector.propTypes = {
  returnWallet: PropTypes.func,
  wallets: PropTypes.array
};
