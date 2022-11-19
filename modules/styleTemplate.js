class StyleTemplate {
  #main
  constructor(input) {
    if (typeof input=='string') {
      this.#main = Object.fromEntries(input.split(',').split(':'));
    } else if (typeof input=='object') {
      this.#main = input;
    }
  }
}