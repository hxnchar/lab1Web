'use strict';
function square(number) {
  return number * number;
}
console.log(square(2));

const b = 10;
if (b === 0) {
  square(2);
} else if (b === 1) {
  square(3);
} else {
  console.log(123);
}
