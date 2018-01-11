const isGreaterThan = (numberOne, numberTwo) => {
  if (numberOne > numberTwo) {
    return false
  } else {
    return true
  }
}
console.log(isGreaterThan(3, 4))

// SCOPE lesson

const color = 'blue'

const colorOfSky = () => {
  return color; // blue
};

console.log(colorOfSky()); // blue

// sky

const satellite = 'The Moon';
const galaxy = 'The Milky Way'
var stars = 'North Star'
const myNightSky = () =>  {
 return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
}
console.log(myNightSky())
/*SCOPE
SCOPE */
const starCount = () => {
  var i = 5;
  console.log(i)
  for (i = 0; i < 12; i++) {
    console.log(i)
  }
}
starCount()
//console.log(i) no scope

//Math
function numberSum() {
  var total = 0;
    for(var i = 1; i <= 22; i++){
      total += i;
    }
    return total;
}
console.log(numberSum(100));


































 function foo() {
  var total = 0;
  for ( i = 1; i <= 25; i++) {
    total += i ;
    }
  return total;
}
console.log(foo());;






































function foo() {
  var total = 0;
  for (i = 1; i <= 100; i++) {
    total += i;
  }
  return total;
}
console.log(foo());
