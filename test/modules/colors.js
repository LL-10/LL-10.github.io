import Color from './library/Color.js';

var HEX = {
    sum(...colors) {
        var object = {r:0,g:0,b:0,a:0};
        colors.filter(c=>!!c).map(c=>{
            var col = new Color(c);
            for (let p in col.rgba) {
                object[p]+=col.rgba[p];
            }
        });
        for (let p in object) {
            if (object[p]>255) {
                object[p] = 255;
            }
        }
        if (object.a>1) {
            object.a = 1;
        }
        var s = new Color(object);
        return s.hex;
    },
    avg(...colors) {
        var object = {r:0,g:0,b:0,a:0};
        colors.filter(c=>!!c).map(c=>{
            var col = new Color(c);
            for (let p in col.rgba) {
                object[p]+=col.rgba[p];
            }
        });
        object.r = Math.floor(object.r*colors.length**-1);
        object.g = Math.floor(object.g*colors.length**-1);
        object.b = Math.floor(object.b*colors.length**-1);
        object.a = object.a*colors.length**-1;
        var s = new Color(object);
        return s.hex;
    },
    not(color) {
        if (!color) {
            return;
        }
        var object = {};
        var col = new Color(color);
        object.r = 255-col.rgba.r;
        object.g = 255-col.rgba.g;
        object.b = 255-col.rgba.b;
        object.a = col.rgba.a;
        var n = new Color(object);
        return n.hex;
    }
};

export default HEX;
