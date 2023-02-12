Object.display = function(object) {
 var s = "";
 if (typeof object === "object" && object !== null) {
  s += object.constructor.name + " {\n";
 for (let x in object) {
  s += `${x}: ${object[x]}\n`;
 }
 s += "}"
 } else {
  s += object;
 }
 alert(s);
};
