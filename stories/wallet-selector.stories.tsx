import React from "react"

import { WalletSelector } from "../src"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Wallet Selector",
  component: WalletSelector,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onChange: (connector) => {
      alert(JSON.stringify(connector))
    },
  },
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <div className="ws-bg-white">
    <div className="ws-px-4 ws-py-12 ws-mx-auto ws-max-w-7xl ws-sm:px-6 ws-lg:py-24 ws-lg:px-8 ws-lg:flex ws-lg:items-center ws-lg:justify-between">
      <h2 className="ws-text-3xl ws-font-extrabold ws-tracking-tight ws-text-gray-900 ws-md:text-4xl">
        <span className="ws-block">Algorand Wallet Selector</span>
        <span className="ws-block ws-text-lg ws-font-bold ws-tracking-wide ws-text-indigo-600">
          Built with 💜 by xBacked
        </span>
      </h2>
      <div className="ws-flex ws-mt-8 ws-lg:mt-0 ws-lg:flex-shrink-0">
        <div className="ws-inline-flex ws-rounded-md ws-shadow">
          <WalletSelector {...args}>
            <button
              className="ws-inline-flex ws-items-center ws-px-4 ws-py-2 ws-text-base ws-font-medium ws-text-white ws-bg-gray-900 ws-border ws-border-transparent ws-rounded-md ws-shadow-sm ws-hover:bg-gray-800 ws-focus:outline-none ws-focus:ring-2 ws-focus:ring-offset-2 ws-focus:ring-gray-500"
              type="button"
            >
              Connect your wallet
            </button>
          </WalletSelector>
        </div>
      </div>
    </div>
  </div>
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  onChange: async (connector) => {
    if (connector) {
      console.log(connector.check())
      console.log(await connector.connect())
      console.log(connector.provider)
    }
  },
}

export const ConfigureWallets = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ConfigureWallets.args = {
  onChange: async (connector) => {
    if (connector) {
      console.log(connector.check())
      console.log(await connector.connect())
      console.log(connector.provider)
    }
  },
  wallets: ["myalgowallet"],
}
