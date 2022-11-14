class Matrix extends Map {
 constructor(...entries) {
  if (entries.length==1 && Array.isArray(entries[0])) {
   var array = entries[0];
   let a = [...array];
   var dimensions = [];
   for (;;) {
    dimensions.push(a.length);
    if (Array.isArray(a[0])) {
     a = a[0];
    } else {
     break;
    }
   }
   var d = new Array(dimensions.length).fill(0).map((x,i)=>new Array(dimensions[i]).fill(0).map((x,i)=>i));
   const f = (a,b)=>[].concat(...a.map(a=>b.map(b=>[].concat(a,b))));
   const cartesian = (a, b, ...c)=>b?cartesian(f(a, b), ...c):a;
   var x = cartesian(...d);
   if (dimensions.length==1) {
    m = super(x.map(k=>{
     var a = array;
     return [[k], a[k]];
    }));
   } else {
    var m = super(x.map(k=>{
     var l = k.length;
     var c = l;
     var a = array;
     var s = [];
     while (c) {
      a = a[k[l-c]];
      s.push(k[l-c]);
      c--;
     }
     return [s, a];
    }));
   }
   return m;
  } else if (entries.reduce((x,y)=>!(isNaN(Number(x))||isNaN(Number(y))))) {
   var dimensions = entries;
   var d = new Array(dimensions.length).fill(0).map((x,i)=>new Array(dimensions[i]).fill(0).map((x,i)=>i));
   const f = (a,b)=>[].concat(...a.map(a=>b.map(b=>[].concat(a,b))));
   const cartesian = (a, b, ...c)=>b?cartesian(f(a, b), ...c):a;
   var x = cartesian(...d);
   var m = super(x.map(k=>{
    var l = k.length;
    var c = l;
    var s = [];
    while (c) {
     s.push(k[l-c]);
     c--;
    }
    return [s, undefined];
   }));
   return m;
  }
 }
 line(dimension, position) {
  var line = [...this].filter(x=>x[0][dimension]==position).map(x=>x[1]);
  return line.length?line:undefined;
 }
}

export default Matrix;
