export default async function() {
 const HTMLElement = await (await import("./HTMLElement.js")).default();
 return class HTMLPage {
  #page;
  constructor(script = function () {}, title = document.title) {
   this.#page = document.implementation.createDocument("http://www.w3.org/1999/xhtml", "html", document.implementation.createDocumentType("html", "", ""));
   const main = new HTMLElement(this.#page.documentElement);
   const head = main.append("head");
   head.append("title").write(title);
   const body = main.append("body");
   script();
  }
  get HTMLObject() {
   return this.#page;
  }
  get HTMLString() {
   return new XMLSerializer().serializeToString(this.#page);
  }
  load() {
   document.location = URL.createObjectURL(new File([], title + ".html", { type: "text/html" }));
  }
 }
}
