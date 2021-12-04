import { Dialog, Transition } from "@headlessui/react"
import React, { Fragment, useState } from "react"
import { AlgorandWalletConnector } from "../../algorand-wallet-connector"
import { WalletSelectorComponentProps } from "../../types"
import { DefaultButton } from "./DefaultButton"
import "../../css/output.css"

export function WalletSelector(props: WalletSelectorComponentProps) {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <AlgorandWalletConnector wallets={props.wallets}>
      {(wallets) => (
        <>
          <div className="flex items-center justify-center">
            {props.children ? (
              React.cloneElement(props.children, { onClick: () => setModalOpen(true) })
            ) : (
              <DefaultButton onClick={() => setModalOpen(true)} />
            )}
          </div>
          <Transition appear as={Fragment} show={modalOpen}>
            <Dialog
              as="div"
              className="fixed inset-0 z-10 overflow-y-auto bg-gray-300 bg-opacity-25"
              onClose={() => setModalOpen(false)}
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
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
                <span aria-hidden="true" className="inline-block h-screen align-middle">
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
                  <div className="inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white bg-gray-100 border shadow-xl rounded-2xl">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                      Select wallet
                    </Dialog.Title>

                    <div className="grid grid-cols-2 gap-8 mt-4">
                      {wallets.map((wallet) => (
                        <button
                          className="flex flex-col items-center justify-center p-4 bg-white rounded-md shadow xcard hover:shadow-md focus:outline-none"
                          key={wallet.name}
                          onClick={async () => {
                            await props.onChange(wallet)
                            setModalOpen(false)
                          }}
                        >
                          <div className="inline-flex items-center justify-center w-16 h-16 border border-gray-200 rounded-full">
                            <wallet.logo className="object-cover object-center" />
                          </div>
                          <p className="text-lg font-bold">{wallet.name}</p>
                        </button>
                      ))}
                    </div>
                    <p className="pt-5 text-base text-center text-gray-500 bold">
                      <a
                        className="hover:underline"
                        href="https://xbacked.io"
                        rel="noreferrer"
                        target="_blank"
                      >
                        Built with 💜 by xBacked
                      </a>
                    </p>

                    <div className="hidden">
                      <button
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                        onClick={() => setModalOpen(false)}
                        type="button"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition>
        </>
      )}
    </AlgorandWalletConnector>
  )
}
