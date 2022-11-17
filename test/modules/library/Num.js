class Num extends String {
    #base;
    constructor(n,b=10) {
        super(Number.parseInt(n,b).toString(b));
        this.#base = b;
    }
    get base() {
        return this.#base;
    }
    get digits() {
        return this.length;
    }
    toBase(b) {
        return new Num(parseInt(this,this.#base).toString(b),b);
    }
    static random(max) {
        if (max.constructor.name!='Num') {
            max = new Num(max);
        }
        return new Num((Number(max.toBase(10))+1)*Math.random()).toBase(max.base);
    }
    static sum(...args) {
        var b;
        args[args.length-1].constructor.name=='Number'?b=args.pop():b=10;
        var s = args.reduce((n,m)=>parseInt(n,n.base)+parseInt(m,m.base),0);
        return new Num(parseInt(s.toString(b)),b);
    }
    static prod(...args) {
        var b;
        args[args.length-1].constructor.name=='Number'?b=args.pop():b=10;
        var p = args.reduce((n,m)=>parseInt(n,n.base)*parseInt(m,m.base),1);
        return new Num(parseInt(p.toString(b)),b);
    }
    static min(...args) {
        return args.reduce((n,m)=>parseInt(n,n.base)<=parseInt(m,m.base)?n:m);
    }
    static max(...args) {
        return args.reduce((n,m)=>parseInt(n,n.base)>=parseInt(m,m.base)?n:m);
    }
    static sort(...args) {
        return args.sort((n,m)=>{
            var x = parseInt(n,n.base)-parseInt(m,m.base);
            if (x==0) {
                return n.base-m.base;
            }
            return x;
        });
    }
    static order(...args) {
        return Num.sort(...args);
    }
}

export default Num;
