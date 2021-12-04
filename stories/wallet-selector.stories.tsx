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
  <div className="bg-white">
    <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
        <span className="block">Algorand Wallet Selector</span>
        <span className="block text-lg font-bold tracking-wide text-indigo-600">
          Built with 💜 by xBacked
        </span>
      </h2>
      <div className="flex mt-8 lg:mt-0 lg:flex-shrink-0">
        <div className="inline-flex rounded-md shadow">
          <WalletSelector {...args} />
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
