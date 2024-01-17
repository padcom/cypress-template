import { Component } from '@padcom/cypress-pop'

export class SearchBox extends Component {
  get #searchBox() {
    return this.root.get('[name=q]')
  }

  #getRandomValue(min: number, max: number) {
    return Math.random() * (max - min) + min
  }

  searchFor(term: string) {
    this.#searchBox.clear()

    // trick the engine that it is a human typing in by providing a random delay
    // after each character.
    term.split('').forEach(character => {
      this.#searchBox.type(character, { delay: this.#getRandomValue(340, 700) })
    })
    this.#searchBox.type('{enter}')

    return this
  }
}
