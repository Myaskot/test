'use strict'
// map

// function(element, index, array){}

var newArray = []
 var cats = [
   {
     name: "Thomas",
     mail: "thomas228@mail.ru"
   },
   {
     name: "Alex",
     mail: "tirech2_0@gmail.com"
   },
   {
     name: "Imanuil",
     mail: "nagibator2002@protonmail.com"
   }
 ]
var getNames = cats.map(function(elem){
  return elem.name + ": " +   elem.mail
  /*
  return {
  name: elem.name,
  mail: elem.mail
  }
  */
})
console.log(getNames);
