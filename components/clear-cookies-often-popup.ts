import { Component } from '@padcom/cypress-pop'

export class ClearCookiesOftenPopup extends Component {
  get #closeButton() {
    return this.root.find('.js-badge-link-close')
  }

  dismiss() {
    this.#closeButton.click()

    return this
  }
}
