import { Component } from '@padcom/cypress-pop'

export class SwitchToDuckDuckGoPopup extends Component {
  get #dismissButton() {
    return this.root.find('.js-badge-link-dismiss')
  }

  dismiss() {
    this.#dismissButton.click()

    return this;
  }
}
