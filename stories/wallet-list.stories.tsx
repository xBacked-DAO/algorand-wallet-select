import React from "react"

import { WalletList } from "../src"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Wallet List",
  component: WalletList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onChange: (connector) => {
      alert(JSON.stringify(connector))
    },
  },
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <div className="ws-items-center ws-w-full ws-min-h-screen ws-py-20 ws-bg-white ws-flex ws-flex-col">
    <WalletList {...args} />
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
