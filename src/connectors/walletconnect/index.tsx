import React from "react"
import WalletConnectClient from "@walletconnect/client"
import QRCodeModal from "@walletconnect/qrcode-modal"
import { Connector, ConnectorType, ImgProps } from "../../types"

const connector: WalletConnectClient = new WalletConnectClient({
  bridge: "https://bridge.walletconnect.org",
  qrcodeModal: QRCodeModal,
})

export class WalletConnect implements Connector {
  public id = "walletconnect"
  public name = "Pera Wallet"
  public type = ConnectorType.qrcode

  logo(imgProps: ImgProps) {
    return <img alt={self.name} src="https://github.com/perawallet.png" {...imgProps} />
  }

  provider() {
    return connector
  }

  connect() {
    return connector.createSession()
  }

  check() {
    return connector.connected
  }
}
