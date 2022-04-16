import { Dialog, Transition } from "@headlessui/react"
import React, { Fragment, useState } from "react"
import { AlgorandWalletConnector } from "../algorand-wallet-connector"
import { WalletSelectorComponentProps } from "../../types"
import { DefaultButton } from "./DefaultButton"
import "../../css/output.css"

export function WalletSelector(props: WalletSelectorComponentProps) {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <AlgorandWalletConnector wallets={props.wallets}>
      {(wallets) => (
        <>
          <div className="ws-flex ws-items-center ws-justify-center">
            {props.children ? (
              React.cloneElement(props.children, { onClick: () => setModalOpen(true) })
            ) : (
              <DefaultButton onClick={() => setModalOpen(true)} />
            )}
          </div>
          <Transition appear as={Fragment} show={modalOpen}>
            <Dialog
              as="div"
              className="ws-fixed ws-inset-0 ws-z-10 ws-overflow-y-auto ws-bg-gray-300 ws-bg-opacity-25"
              onClose={() => setModalOpen(false)}
            >
              <Dialog.Overlay className="ws-fixed ws-inset-0 ws-bg-black ws-bg-opacity-25" />
              <div className="ws-min-h-screen ws-px-4 ws-text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ws-ease-out ws-duration-300"
                  enterFrom="ws-opacity-0"
                  enterTo="ws-opacity-100"
                  leave="ws-ease-in ws-duration-200"
                  leaveFrom="ws-opacity-100"
                  leaveTo="ws-opacity-0"
                >
                  <Dialog.Overlay className="ws-fixed ws-inset-0" />
                </Transition.Child>

                {/* This element is to trick the browser into centering the modal contents. */}
                <span aria-hidden="true" className="ws-inline-block ws-h-screen ws-align-middle">
                  &#8203;
                </span>
                <Transition.Child
                  as={Fragment}
                  enter="ws-ease-out ws-duration-300"
                  enterFrom="ws-opacity-0 ws-scale-95"
                  enterTo="ws-opacity-100 ws-scale-100"
                  leave="ws-ease-in ws-duration-200"
                  leaveFrom="ws-opacity-100 ws-scale-100"
                  leaveTo="ws-opacity-0 ws-scale-95"
                >
                  <div className="ws-inline-block ws-w-full ws-max-w-lg ws-p-6 ws-my-8 ws-overflow-hidden ws-text-left ws-align-middle ws-transition-all ws-transform ws-bg-gray-100 ws-border ws-shadow-xl ws-rounded-2xl">
                    <Dialog.Title
                      as="h3"
                      className="ws-text-lg ws-font-medium ws-leading-6 ws-text-gray-900"
                    >
                      Select wallet
                    </Dialog.Title>

                    <div className="ws-grid ws-grid-cols-2 ws-gap-4 ws-mt-4">
                      {wallets.map((wallet) => (
                        <button
                          className="ws-flex ws-flex-col ws-items-center ws-justify-center ws-p-4 ws-bg-white ws-rounded-md ws-shadow ws-xcard ws-hover:shadow-md ws-focus:outline-none"
                          key={wallet.name}
                          onClick={async () => {
                            await props.onChange(wallet)
                            setModalOpen(false)
                          }}
                        >
                          <div className="ws-inline-flex ws-items-center ws-justify-center ws-w-16 ws-h-16 ws-border ws-border-gray-200 ws-rounded-full">
                            <wallet.logo className="ws-object-cover ws-object-center ws-h-full ws-w-full" />
                          </div>
                          <p className="ws-text-lg ws-font-bold">{wallet.name}</p>
                        </button>
                      ))}
                    </div>
                    <p className="ws-pt-5 ws-text-base ws-text-center ws-text-gray-600 ws-bold">
                      <a
                        className="ws-hover:underline"
                        href="https://xbacked.io"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <span>Built with</span>
                        <span className="ws-ml-1 ws-mr-2">💜</span>
                        <span>by xBacked</span>
                      </a>
                    </p>

                    <div className="ws-hidden">
                      <button
                        className="ws-inline-flex ws-justify-center ws-px-4 ws-py-2 ws-text-sm ws-font-medium ws-text-red-900 ws-bg-red-100 ws-border ws-border-transparent ws-rounded-md ws-hover:bg-red-200 ws-focus:outline-none ws-focus-visible:ring-2 ws-focus-visible:ring-offset-2 ws-focus-visible:ring-red-500"
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
