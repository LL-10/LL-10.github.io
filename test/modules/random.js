class Random {
    #value = Random.value;
    constructor() {
        return null;
    }
    static get value() {
        return Math.random();
    }
    static int(a,b=0) {
        var d, m;
        d = Math.abs(a-b)+1;
        m = Math.min(a,b);
        return m+Math.floor(d*Random.value)
    }
    static #pick(array) {
        return array[Random.int(array.length-1)];
    }
    static pick(...elements) {
        if (elements.length>1) {
            return Random.#pick(elements);
        }
        if (Array.isArray(elements[0])&&elements[0].length>0) {
            return Random.#pick(elements[0]);
        }
        return elements[0];
    }
    get value() {
        return this.#value;
    }
}

export default Random;
