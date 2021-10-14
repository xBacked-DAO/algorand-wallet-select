import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Selector = ({ returnWallet }) => {
  const walletData = { hello: "world" }
  return (
    <div>
      <h1 className="text-lg">Selector goes here!</h1>
      <button onClick={() => returnWallet(walletData)}>Click me to run prop func</button>
      <p>Built with love by xBacked</p>
    </div>
  );
};

Selector.propTypes = {
   returnWallet: PropTypes.func,
};
