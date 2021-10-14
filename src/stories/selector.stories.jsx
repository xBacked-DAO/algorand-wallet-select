import React from 'react';

import { Selector } from '../components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Algorand Wallet Selector',
  component: Selector,
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
    <h1 className="text-lg">Selector goes here!</h1>
    <Selector {...args} />
    <p>Built with love by xBacked</p>
  </div>
);

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  returnWallet: (data) => {
    alert(JSON.stringify(data))
  },
};
