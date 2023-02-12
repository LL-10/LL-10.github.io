export default async function() {
 return class Random {
  #value = Random.value;
  constructor() {
   return null;
  }
  static get value() {
   return Math.random();
  }
  static int(a,b = 0) {
   const minimum = Math.min(a,b);
   const range = Math.abs(a-b)+1;
   return minimum + Math.floor(range * Random.value);
  }
  static pick(...elements) {
   var choices = elements;
   if (elements.length < 2) choices = elements[0];
   if (!Array.isArray(choices)) choices = [choices];
   return choices[Random.int(choices.length - 1)];
  }
  get value() {
   return this.#value;
  }
 }
}
