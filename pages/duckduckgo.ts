import { Page } from '@padcom/cypress-pop'

import { SearchBox } from '../components/search'
import { ClearCookiesOftenPopup } from '../components/clear-cookies-often-popup'
import { SwitchToDuckDuckGoPopup } from '../components/switch-to-duckduckgo-popup'

export class DuckDuckGoPage extends Page {
  constructor() {
    super('https://www.duckduckgo.com')
  }

  get switchToDuckDuckGoPopup() {
    return new SwitchToDuckDuckGoPopup(this.root.find('.js-badge-link'))
  }

  get clearCookiesOftenPopup() {
    return new ClearCookiesOftenPopup(this.root.find('.js-badge-cookie-msg'))
  }

  get searchBox() {
    return new SearchBox(this.root)
  }
}
