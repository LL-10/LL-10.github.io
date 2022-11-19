class StyleTemplate {
  constructor(input) {
    if (typeof input=='string') {
      return = Object.fromEntries(input.split(/\,$|\;$/)[0].split(/,|;/).map(x=>x.trim().split(':').map(x=>x.trim()));
    } else if (typeof input=='object') {
      return input;
    }
  }
}

export default StyleTemplate;
