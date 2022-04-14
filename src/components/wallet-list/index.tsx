import React from "react"
import { AlgorandWalletConnector } from "../../algorand-wallet-connector"
import { WalletSelectorComponentProps } from "../../types"
import "../../css/output.css"

export function WalletList(props: WalletSelectorComponentProps) {
  return (
    <AlgorandWalletConnector wallets={props.wallets}>
      {(connectors) => (
        <div className="ws-flex ws-flex-col ws-w-full ws-max-w-xl ws-mx-auto ws-border ws-border-gray-200 ws-divide-y ws-divide-gray-200 ws-rounded-lg">
          {connectors.map((connector) => (
            <div
              className="ws-flex ws-items-center ws-justify-between ws-w-full ws-h-20 ws-px-4 ws-space-x-4"
              key={connector.id}
            >
              <div className="ws-flex ws-items-center ws-space-x-4">
                <div className="ws-inline-flex ws-items-center ws-justify-center ws-overflow-hidden ws-border ws-border-gray-300 ws-rounded-full ws-w-11 ws-h-11">
                  <connector.logo className="ws-object-center ws-bg-cover ws-h-full ws-w-full" />
                </div>
                <div className="ws-flex ws-flex-col">
                  <p className="ws-inline-block ws-max-w-full ws-my-0 ws-text-sm ws-font-semibold ">
                    <a
                      className="ws-font-semibold ws-no-underline ws-whitespace-no-wrap ws-cursor-pointer"
                      href="/"
                    >
                      {connector.name}
                    </a>
                  </p>
                  <p
                    className="ws-inline-block ws-max-w-full ws-my-0 ws-text-sm ws-font-normal"
                    title=""
                  >
                    Algorand official wallet
                  </p>
                </div>
              </div>
              <div className="ws-flex ws-items-center ws-space-x-4 ws-text-sm">
                <button
                  className="ws-inline-flex ws-items-center ws-px-4 ws-py-2 ws-text-sm ws-font-medium ws-text-gray-700 ws-bg-white ws-border ws-border-gray-300 ws-rounded-md ws-shadow-sm ws-hover:bg-gray-50 ws-focus:outline-none ws-focus:ring-2 ws-focus:ring-offset-2 ws-focus:ring-indigo-500"
                  onClick={() => props.onChange(connector)}
                  type="button"
                >
                  <span className="ws-inline-block ws-leading-5 ws-truncate">Connect</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </AlgorandWalletConnector>
  )
}
