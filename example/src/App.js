import React from 'react'
import AlgoWS from "algorand-wallet-select";

import logo from './logo.svg';
import './styles/App.css';
import './styles/output.css'

const getProviderOptions = () => {
  const providerOptions = {
    walletconnect: {
      package: "walletprovider",
      options: {
        infuraId: process.env.REACT_APP_INFURA_ID
      }
    },
    torus: {
      package: "torus"
    },
    fortmatic: {
      package: "fortmatic",
      options: {
        key: process.env.REACT_APP_FORTMATIC_KEY
      }
    },
    authereum: {
      package: "authereum"
    },
  };
  return providerOptions;
};

class App extends React.Component {
  show;
  web3Modal;

  constructor(props) {
    super(props);
    this.web3Modal = new AlgoWS();
  }

  onConnect = async () => {
    // const provider = await algoWS.connect();
    console.log('onConnect')
  };

  render = () => {
    const {
      onConnect,
    } = this;
    return (
      <div className="App">
        <header className="App-header">
          <div className="fixed inset-0 flex items-center justify-center">
            <button
              type="button"
              onClick={onConnect}
              className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              Select wallet
            </button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
