import Color from './library/Color.js';

class HTMLelement {
    #main;
    constructor(element) {
        this.#main = element;
    }
    get code() {
        return this.#main.innerHTML;
    }
    get value() {
        return this.#main.value;
    }
    init(text) {
        this.#main.innerHTML = text;
    }
    write(text) {
        this.#main.append(document.createTextNode(text));
    }
    clear() {
        this.#main.innerHTML = '';
    }
    append(tag) {
        return new HTMLelement(this.#main.appendChild(document.createElement(tag)));
    }
    addAttribute(key) {
        this.#main.setAttribute(key,'');
    }
    setAttribute(key,value) {
        this.#main.setAttribute(key,value);
    }
    hasAttribute(key) {
        return this.#main.hasAttribute(key);
    }
    getAttribute(key) {
        return this.#main.getAttribute(key);
    }
    removeAttribute(key) {
        this.#main.removeAttribute(key);
    }
    clearAttributes() {
        this.#main.getAttributeNames().map(key=>this.removeAttribute(key));
    }
    setStyle(key,value) {
        this.#main.style.setProperty(key,value);
    }
    getStyle(key) {
        var p = this.#main.style.getPropertyValue(key);
        if (p.match(/rgb/)!=null) {
            return new Color(p).hex;
        }
        return p;
    }
    removeStyle(key) {
        this.#main.style.removeProperty(key);
    }
    clearStyle() {
        this.#main.style = null;
    }
    remove() {
        this.#main.remove();
    }
    on(event,action,...options) {
        let obj = {};
        options.map(o=>obj[o]=true);
        this.#main.addEventListener(event,action,obj);
    }
}

var html = new HTMLelement(document.documentElement);
var head = new HTMLelement(document.head);
var title = new HTMLelement(document.getElementsByTagName("title")[0]);
var body = new HTMLelement(document.body);

export {HTMLelement, html, head, title, body};
