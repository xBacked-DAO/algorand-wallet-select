import React from "react"
import { AlgorandWalletConnector } from "../../algorand-wallet-connector"
import { WalletSelectorComponentProps } from "../../types"
import "../../css/output.css"

export function WalletList(props: WalletSelectorComponentProps) {
  return (
    <AlgorandWalletConnector wallets={props.wallets}>
      {(connectors) => (
        <div className="flex flex-col w-full max-w-xl mx-auto border border-gray-200 divide-y divide-gray-200 rounded-lg">
          {connectors.map((connector) => (
            <div
              className="flex items-center justify-between w-full h-20 px-4 space-x-4"
              key={connector.id}
            >
              <div className="flex items-center space-x-4">
                <div className="inline-flex items-center justify-center overflow-hidden border border-gray-300 rounded-full w-11 h-11">
                  <connector.logo className="object-center bg-cover" />
                </div>
                <div className="flex flex-col">
                  <p className="inline-block max-w-full my-0 text-sm font-semibold ">
                    <a
                      className="font-semibold no-underline whitespace-no-wrap cursor-pointer"
                      href="/"
                    >
                      {connector.name}
                    </a>
                  </p>
                  <p className="inline-block max-w-full my-0 text-sm font-normal " title="">
                    Databases
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <button
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => props.onChange(connector)}
                  type="button"
                >
                  <span className="inline-block leading-5 truncate">Connect</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </AlgorandWalletConnector>
  )
}
