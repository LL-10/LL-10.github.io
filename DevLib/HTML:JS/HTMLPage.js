export default async function() {
 const HTMLElement = await (await import("./HTMLElement.js")).default();
 return class HTMLPage {
  #title;
  #build;
  constructor(title, ) {
   this.#title = title;
  }
  build() {
   document.title = this.#title;
  }
 }
}
