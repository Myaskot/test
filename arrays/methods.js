'use strict'

//forEach
const array = [1, 2, 3]
array.forEach(function(item, index) {
  console.log(item, index);
});

// map
const newArray = [1, 2, 3]
const doubled = newArray.map(function(item, index) {
  return item + ' user';
})
console.log(doubled);

// filter
const ints = [1, 2, 3];
const evens = ints.filter(function(item) {
  return item % 2 === 0;
});
console.log(evens);

// reuduce
const sum = [1, 2, 3].reduce(function(result, item) {
  return result + item;
})
console.log(sum);

// some
const hasNegativeNumbers = [1, 2, 3, -1, 4].some(function(item) {
  return item < 0;
})
console.log(hasNegativeNumbers);

// every
const allPositiveNumver = [1, 2, 3].every(function(item) {
  return item > 0;
})
console.log(allPositiveNumver);

// find
const objects = [{id: 'a'}, {id: 'b'}, {id: 'c'}];
const found = objects.find(function(item) {
  return item.id === 'b';
});
console.log(found);

//findIndex
const objects2 = [{id: 'a'}, {id: 'b'}, {id: 'c'}];
const foundIndex = objects2.findIndex(function(item) {
  return item.id === 'b';
});
console.log(foundIndex);
