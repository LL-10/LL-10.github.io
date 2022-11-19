class StyleTemplate {
  #main
  constructor(input) {
    if (typeof input=='string') {
      this.#main = Object.fromEntries(input.split(/,$|;$/)[0].split(/,|;/).map(x=>x.trim().split(':').map(x=>x.trim()));
    } else if (typeof input=='object') {
      this.#main = input;
    }
    return this.#main;
  }
}

export default StyleTemplate;
