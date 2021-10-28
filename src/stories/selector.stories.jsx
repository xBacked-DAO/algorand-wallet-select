import React from 'react';

import { WalletSelector } from '../';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Algorand Wallet Selector',
  component: WalletSelector,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    returnWallet: (data) => {
      alert(JSON.stringify(data))
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <div>
    <h1 className="text-lg">Algorand Wallet Selector</h1>
    <p>Built with 💚 by xBacked</p>
    <WalletSelector {...args} />
  </div>
);

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  wallets: ['myalgowallet'],
  returnWallet: async (data) => {
    if (!!data) {
      console.log(data.connector.check());
      console.log(await data.connector.connect());
      console.log(data.connector.provider);
    }
  },
};
