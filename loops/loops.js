'use strict'
var i = 10;
while (i < 20) {
  console.log(i++);

};

var a;
for(a = 5; a--;) {
  console.log(a);
}

// for (начало; условие; шаг) {
//   ... тело цикла ...
// }

var i;
for (i = 5; i < 10; i++) {
  console.log(i);
}

var i = 0
function result(n) {
  var a;
  for (a = 1; a <= n; a++) {
    i += a;
  }
return i;
}
console.log(result(100));

var i = 3;
do {
  i++
  console.log(i);
} while (i < 23)
