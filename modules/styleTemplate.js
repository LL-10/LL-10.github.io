class StyleTemplate {
  #main
  constructor(input) {
    if (typeof input=='string') {
      this.#main = Object.fromEntries(input.split(/,|;/).map(x=>x.trim().split(':').map(x=>x.trim()));
    } else if (typeof input=='object') {
      this.#main = input;
    }
  }
}