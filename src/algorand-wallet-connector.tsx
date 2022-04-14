import React from "react"
import { SupportedConnectors } from "./connectors"
import { Connector } from "./types"

type Props = {
  wallets?: string[]
  children: (connectors: Connector[]) => React.ReactNode
}

const DEFAULT_PROPS = {
  wallets: [] as string[],
}

export class AlgorandWalletConnector extends React.Component<Props> {
  static defaultProps = DEFAULT_PROPS

  constructor(props: Props) {
    super(props)
  }

  render() {
    const { children, wallets } = this.props
    if (!isFunction(children)) throw new Error("children must be a function")
    let connectors: Connector[] = []

    if (wallets && wallets.length > 0) {
      connectors = SupportedConnectors.filter((connector) => wallets.includes(connector.id))
    }

    if (connectors.length === 0) connectors = SupportedConnectors

    return children(connectors)
  }
}

type IsFunction<T> = T extends (...args: any[]) => any ? T : never
const isFunction = <T extends {}>(value: T): value is IsFunction<T> => typeof value === "function"
