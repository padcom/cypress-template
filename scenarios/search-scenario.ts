import { type Scenario } from '@padcom/cypress-pop'
import { DuckDuckGoPage } from '../pages/duckduckgo'

export class SearchScenario implements Scenario<DuckDuckGoPage, DuckDuckGoPage> {
  constructor(private searchTerm: string) {
  }

  run(entry: DuckDuckGoPage) {
    entry.searchBox
      .searchFor('test')
      .searchFor(this.searchTerm)
    entry.switchToDuckDuckGoPopup.dismiss()
    entry.clearCookiesOftenPopup.dismiss()

    return entry
  }
}
