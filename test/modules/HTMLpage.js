import {HTMLelement, html, head, title, body} from './HTMLelement.js';

class HTMLpage {
    #title;
    #build;
    constructor(title, ...contents) {
        class Element extends HTMLelement {
            
        }
        this.#title = title;
        this.#build = contents;
    }
    build() {
        title.init(this.#title)
        this.#build();
    }
}

export default HTMLpage;
