export interface Connector {
  id: string
  name: string
  type: ConnectorType
  logo(imageProps: LogoType): JSX.Element
  provider(): unknown
  connect(): Promise<unknown>
  check(): boolean
}

type LogoType = SvgProps | ImgProps
export type SvgProps = Omit<JSX.IntrinsicElements["svg"], "vieWBox" | "xmlns">
export type ImgProps = Omit<JSX.IntrinsicElements["img"], "src" | "alt">

export type WalletSelectorComponentProps = {
  wallets?: string[]
  children?: JSX.Element
  onChange: (wallet: Connector) => unknown
}

export type DefaultButtonComponentProps = {
  onClick: () => void
}

export enum ConnectorType {
  "qrcode" = "qrcode",
  "injected" = "injected",
}
