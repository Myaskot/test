e'use strict';

let i = 0;

while (i < 10) {
  i++;
  console.log('Hello');
  if (i === 1) continue
  console.log('World');
}
