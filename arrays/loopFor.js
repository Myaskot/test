var vacationSpots = ['cinema', 'cafe', 'university'];
for (var vacationSpotIndex = 0; vacationSpotIndex < vacationSpots.length; vacationSpotIndex++) {
  console.log(vacationSpots[vacationSpotIndex]); // console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]) /

};

var vacationSpots = ['cinema', 'cafe', 'university'];
for (var vacationSpotIndex = vacationSpots.length - 1; vacationSpotIndex >= 0; vacationSpotIndex--)  { // vacationSpots.length - 1, because length = 3, index = 0, 1, 2
  console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);
};
 var myPlaces = ['cinema', 'cafe', 'school']
var friendPlaces = ['cafe', 'Budapest', 'hell']
for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++) {
  console.log(myPlaces[myPlacesIndex])
for (let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++) {
  if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]) {
    console.log('cafe' + myPlaces[myPlacesIndex])
               }

 }
}




function foo() {
  var total = 0;
  for (num = 1; num <= 100; num++) {
    total += num;
  }
  return total
}
console.log(foo());
