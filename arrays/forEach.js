'use strict'
// forEach;
// function(element, index, array){}
 const cities = [
  [ 'City', 'Population', 'Area', 'Density', 'Country'],
  [ 'Shanghai', 24256801, 6341, 3827, 'China' ],
  [ 'Beijing', 21516001, 16412, 1312, 'China' ],
  [ 'Delhi', 16787942, 1485, 11314, 'India' ],
  [ 'Lagos', 16060304, 1172, 13713, 'Nigeria' ],
  [ 'Tianjin', 15200001, 11761, 1294, 'China' ],
  [ 'Karachi', 14910353, 3528, 4573, 'Pakistan' ],
  [ 'Istanbul', 14160468, 5462, 2594, 'Turkey' ],
  [ 'Tokyo', 13513735, 2192, 6169, 'Japan' ],
  [ 'Guangzhou', 13080501, 7435, 1760, 'China' ],
  [ 'Mumbai', 12442374, 6035, 20681, 'India' ],
];
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
var getNames =  function(elem) {
  newArray.push(elem.name, elem.mail)

}
cats.forEach(getNames)
console.log(newArray)
console.log(typeof cats);
console.log(typeof cities)
