class Color {
    #rgba;
    #hex;
    constructor(input) {
        if (typeof input=='object') {
            this.#rgba = input;
        } else if (input.match(/rgb/)!=null) {
            this.#rgba = Color.#RGBA_StringToObject(input);
        } else {
            this.#rgba = Color.#HEXtoRGBA(input);
        }
        this.#hex = Color.#RGBAtoHEX(this.#rgba);
    }
    static #RGBA_StringToObject(string) {
        var object = {};
        var arr = string.split('(')[1].split(')')[0].split(',').map(n=>Number(n));
        object.r = arr[0];
        object.g = arr[1];
        object.b = arr[2];
        arr.length==4?object.a = arr[3]:object.a=1;
        return object;
    }
    static #RGBAtoHEX(object) {
        if (typeof object=='string') {
            object=RGBA_StringToObject(object);
        }
        var string = '#';
        function add(x) {
            if(x.length==1) {
                x='0'+x;
            }
            string+=x;
        }
        add(object.r.toString(16));
        add(object.g.toString(16));
        add(object.b.toString(16));
        add(Math.floor(255*object.a).toString(16));
        return string;
    }
    static #HEXtoRGBA(string) {
        var object = {};
        string[0]=='#'?string:string='#'+string;
        if (string.length==4) {
            object.r = parseInt(string[1]+string[1],16);
            object.g = parseInt(string[2]+string[2],16);
            object.b = parseInt(string[3]+string[3],16);
            object.a = 1;
        }
        if (string.length==5) {
            object.r = parseInt(string[1]+string[1],16);
            object.g = parseInt(string[2]+string[2],16);
            object.b = parseInt(string[3]+string[3],16);
            object.a = parseInt(string[4]+string[4],16)/255;
        }
        if (string.length==7) {
            object.r = parseInt(string.substring(1,3),16);
            object.g = parseInt(string.substring(3,5),16);
            object.b = parseInt(string.substring(5,7),16);
            object.a = 1;
        }
        if (string.length==9) {
            object.r = parseInt(string.substring(1,3),16);
            object.g = parseInt(string.substring(3,5),16);
            object.b = parseInt(string.substring(5,7),16);
            object.a = parseInt(string.substring(7,9),16)/255;
        }
        return object;
    }
    get rgba() {
        return this.#rgba;
    }
    get rgb() {
      return this.rgba;
    }
    get hex() {
        return this.#hex;
    }
}

export default Color;
