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

function App() {
  const walletSelector = new AlgoWS({
    cacheProvider: false,
    providerOptions: getProviderOptions()
  });

  const onConnect = async () => {
    const wallet = await walletSelector.connect();

    // await this.subscribeProvider(provider);
    // const web3: any = initWeb3(provider);
    // const accounts = await web3.eth.getAccounts();
    // const address = accounts[0];
    // const networkId = await web3.eth.net.getId();
    // const chainId = await web3.eth.chainId();
    // await this.setState({
    //   web3,
    //   provider,
    //   connected: true,
    //   address,
    //   chainId,
    //   networkId
    // });
    // await this.getAccountAssets();
  };

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

export default App;
