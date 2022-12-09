import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import { WalletButton } from './walletButton'

import { useWallet } from '../context/ProvideWallet'

export const Modal = ({ isOpen, closeModal }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="ws-bg-gray-300 ws-bg-opacity-25 ws-fixed ws-inset-0 z-10 ws-overflow-y-auto"
        onClose={closeModal}
      >
        <Dialog.Overlay className="ws-fixed ws-inset-0 ws-bg-black ws-bg-opacity-25" />
        <div className="ws-min-h-screen ws-px-4 ws-text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="ws-fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="ws-inline-block ws-h-screen ws-align-middle"
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
            <div className="ws-bg-gray-100 ws-inline-block ws-w-full ws-max-w-md ws-p-6 ws-my-8 ws-overflow-hidden ws-text-left ws-align-middle ws-transition-all ws-transform ws-border ws-shadow-xl ws-rounded-2xl">
              <ModalContent closeModal={closeModal}  />
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

const ModalContent = ({ closeModal }) => {
  const { setWallet, getWallets } = useWallet();
  const onClick = (walletInfo) => {
    setWallet(walletInfo);
    closeModal(walletInfo);
  }
  return (
    <>
      <Dialog.Title
        as="h3"
        className="ws-text-lg ws-font-semibold ws-leading-6 ws-text-gray-700 ws-text-center"
      >
        Select wallet
      </Dialog.Title>

      <div className="ws-grid ws-grid-cols-2 ws-gap-6 ws-mt-4">
        {getWallets().map(wallet =>
          !!wallet ? (
            <WalletButton key={wallet.id} info={wallet} onClick={() => onClick(wallet)} />
          ) : null
        )}
      </div>
      <p
        className="ws-text-xs ws-text-gray-500 ws-bold ws-text-center ws-pt-5">
          <a className="ws-hover:underline" href="https://xbacked.io" target="_blank">Built by xBacked</a>
        </p>

      <div className="ws-hidden">
        <button
          type="button"
          className="ws-inline-flex ws-justify-center ws-px-4 ws-py-2 ws-text-sm ws-font-medium ws-text-red-900 ws-bg-red-100 ws-border ws-border-transparent ws-rounded-md ws-hover:bg-red-200 ws-focus:outline-none ws-focus-visible:ring-2 ws-focus-visible:ring-offset-2 ws-focus-visible:ring-red-500"
          onClick={closeModal}
        >
          Cancel
        </button>
      </div>
    </>
  );
}

export default Modal;
