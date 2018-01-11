'use strict'
var cat = {
  mustache: true,
  eyes: 'yellow',
  voice: function() {
    return 'myau myau myau'
  }
}
var dog = {
  tails: true,
  eyes: 'brown',
  voice: function() {
    return 'gav gav gav'
  }
}
var animal = {
  age: 4,
  color: 'black'
}
animal.age = 5;
cat.__proto__ = animal;
dog.__proto__ = animal;
console.log(cat.age);


Object.prototype.forEach = function(){
  console.log('h');
}
var arr = [1,2,3,4];
arr.forEach()
