import { DuckDuckGoPage } from '../pages/duckduckgo'
import { SearchScenario } from '../scenarios/search-scenario'

describe('DuckDuckGo search', () => {
  let page: DuckDuckGoPage

  beforeEach(() => {
    page = new DuckDuckGoPage()
  })

  it('will search for `padcom`', () => {
    page.run(new SearchScenario('padcom'))
  })
})
