export default async function() {
 const XMLElement = await (await import("./XMLElement.js")).default();
 return class XMLPage {
  #page;
  constructor(script = function (root) { return; }, root = "root", namespace = "", doctype = "xml", dtdPUBLIC = "", dtdSYSTEM = "") {
   this.#page = document.implementation.createDocument(namespace, root, document.implementation.createDocumentType(doctype, dtdPUBLIC, dtdSYSTEM));
   script(new XMLElement(this.#page.documentElement));
  }
  get XMLObject() {
   return this.#page;
  }
  get XMLString() {
   return new XMLSerializer().serializeToString(this.#page);
  }
  load() {
   document.location = URL.createObjectURL(new File([], title + ".html", { type: "text/html" }));
  }
 }
}
