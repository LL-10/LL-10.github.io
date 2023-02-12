export default async function() {
 const XMLElement = await (await import("../XML:JS/XMLElement.js")).default();
 return class SVGElement extends XMLElement {
  #main;
  #namespace = "http://www.w3.org/2000/svg";
  constructor(SVGObject, setters = null) {
   super(SVGObject, setters);
   this.#main = SVGObject;
   Object.defineProperty(this, "appendNS", {
    value: super.append,
    enumerable: false,
   });
  }
  get SVGObject() {
   return super.XMLObject;
  }
  append(tag, next = null, setters = null) {
   return this.appendNS(tag, next, setters, this.#namespace);
  }
  use(id, next = null) {
   return super.append("use", next, [["href", "#" + id], "x", "y", "width", "height"], this.#namespace);
  }
 }
}
