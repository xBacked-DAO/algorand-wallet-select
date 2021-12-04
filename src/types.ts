export interface Connector {
  id: string
  name: string
  type: ConnectorType
  logo(imageProps: Omit<JSX.IntrinsicElements["svg"], "vieWBox" | "xmlns">): JSX.Element
  provider(): unknown
  connect(): Promise<unknown>
  check(): boolean
}

export type WalletSelectorComponentProps = {
  wallets?: string[]
  onChange: (wallet: Connector) => unknown
}

export enum ConnectorType {
  "qrcode" = "qrcode",
  "injected" = "injected",
}
