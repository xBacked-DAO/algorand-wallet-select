import logo from './logo.svg';
import './App.css';

import {
  Grid
} from "@material-ui/core";

import AlgoWS from "algorand-wallet-selector";

const App = () => {
  const web3Modal = new AlgoWS();

  return (
    <Grid container>
      <Grid item>
        Hi
      </Grid>
    </Grid>
  );
}

export default App;
