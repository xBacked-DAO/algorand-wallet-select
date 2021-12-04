import React from "react"
import { MyAlgoWallet } from "./connectors/myalgowallet"
import { WalletConnect } from "./connectors/walletconnect"
import { Connector } from "./types"

export const supportedConnectors = [new MyAlgoWallet(), new WalletConnect()]

type Props = {
  wallets?: string[]
  children: (connectors: Connector[]) => React.ReactNode
}

export class AlgorandWalletConnector extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  static DEFAULT_PROPS = {
    wallets: [],
  }

  render() {
    const { children, wallets } = this.props
    if (!isFunction(children)) throw new Error("children must be a function")
    let connectors: Connector[] = []

    if (wallets && wallets.length > 0) {
      connectors = supportedConnectors.filter((connector) => wallets.includes(connector.id))
    }

    if (connectors.length === 0) connectors = supportedConnectors

    return children(connectors)
  }
}

type IsFunction<T> = T extends (...args: any[]) => any ? T : never
const isFunction = <T extends {}>(value: T): value is IsFunction<T> => typeof value === "function"
