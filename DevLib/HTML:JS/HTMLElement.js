export default async function() {
 const XMLElement = await (await import("../XML:JS/XMLElement.js")).default();
 return class HTMLElement extends XMLElement {
  #main;
  #namespace = "http://www.w3.org/1999/xhtml";
  constructor(HTMLObject, setters = null) {
   super(HTMLObject, setters);
   this.#main = HTMLObject;
   Object.defineProperty(this, "appendNS", {
    value: super.append,
    enumerable: false,
   });
  }
  get HTMLObject() {
   return super.XMLObject;
  }
  append(tag, next = null, setters = null) {
   return this.appendNS(tag, next, setters, this.#namespace);
  }
  get value() {
   return this.#main.value;
  }
 }
}
