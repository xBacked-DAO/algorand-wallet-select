import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import { WalletButton } from './walletButton'
import { wallets } from '../wallets';

import { useWallet } from '../context/ProvideWallet'

export const Modal = ({ isOpen, closeModal }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white border shadow-xl rounded-2xl">
              <ModalContent closeModal={closeModal} />
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

const ModalContent = ({ closeModal }) => {
  const { setWallet } = useWallet();
  const onClick = (walletInfo) => {
    console.log(walletInfo)
    setWallet(walletInfo);
    closeModal(walletInfo);
  }
  return (
    <>
      <Dialog.Title
        as="h3"
        className="text-lg font-medium leading-6 text-gray-900"
      >
        Select wallet
      </Dialog.Title>

      <div className="grid grid-cols-2 gap-8 mt-4">
        {wallets.map(wallet =>
          !!wallet ? (
            <WalletButton key={wallet.id} info={wallet} onClick={() => onClick(wallet)} />
          ) : null
        )}
      </div>

      <div className="hidden">
        <button
          type="button"
          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
          onClick={closeModal}
        >
          Cancel
        </button>
      </div>
    </>
  );
}

export default Modal;
