'use strict';

const array = (...values) => {
  const getter = key => values[key];

  getter.push = value => values.push(value);
  getter.pop = () => values.pop();

  return getter;
};

const arr = array('first', 'second');

arr.push('third');
arr.push('forth');

console.log(arr(0)); // Выводит: first
console.log(arr(1)); // Выводит: second
console.log(arr(2)); // Выводит: third
console.log(arr(3)); // Выводит: forth

console.log(arr.pop()); // Выводит: forth
console.log(arr.pop()); // Выводит: third
console.log(arr.pop()); // Выводит: second
console.log(arr.pop()); // Выводит: first

console.log(arr.pop()); // Выводит: undefined

module.exports = { array };
