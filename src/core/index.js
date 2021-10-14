import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Modal } from '../components'
import {
  WEB3_CONNECT_MODAL_ID,
} from '../constants'
import { ProvideModal } from '../providers/use'

export class Core {
  show = true;

  constructor() {
    this.renderModal()
  }

  renderModal() {
    const el = document.createElement('div')
    el.id = WEB3_CONNECT_MODAL_ID
    document.body.appendChild(el)

    ReactDOM.render(
      <div>
        <ProvideModal>
          <Modal show={this.show} />
        </ProvideModal>
      </div>,
      document.getElementById(WEB3_CONNECT_MODAL_ID)
    )
  }
}