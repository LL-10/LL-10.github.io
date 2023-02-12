export default async function() {
 return class XMLElement {
  #main;
  #namespace;
  constructor(XMLObject, setters = null) {
   this.#main = XMLObject;
   this.#namespace = this.#main.namespaceURI || null;
   if(setters) {
    if(!Array.isArray(setters)) setters = Object.entries(setters);
    setters.storage = {};
    setters.forEach(property => {
     var key, value;
     if(Array.isArray(property)) [key, value] = property;
     else key = property;
     if(key.slice(-1) == "*") {
      key = key.slice(0, -1);
      setters.storage[key] = {
       value: this.#main[key],
       enumerable: true,
       configurable: true,
       writable: true,
      }
     } else {
      setters.storage[key] = {
       set(value) {
        this.#main.setAttributeNS(null, key, value);
       },
       get() {
        return this.#main.getAttributeNS(null, key);
       },
       enumerable: true,
       configurable: true,
      }
     }
     Object.defineProperties(this, setters.storage);
     if(value !== null && !Number.isNaN(value)) this[key] = value;
    });
   }
  }
  get XMLObject() {
   return this.#main;
  }
  append(tag, next = null, setters = null, namespace = this.#namespace || null) {
   if (next != null && next.constructor == this.constructor) next = next.XMLObject;
   return new this.constructor(this.#main.insertBefore(document.createElementNS(namespace, tag), next), setters);
  }
  write(text) {
   this.#main.append(document.createTextNode(text));
   return this;
  }
  clear() {
   this.#main.textContent = "";
   return this;
  }
  remove() {
   this.#main.remove();
  }
  on(event,action,...options) {
   let obj = {};
   options.map(o=>obj[o]=true);
   this.#main.addEventListener(event,action,obj);
   return this;
  }
 }
}
