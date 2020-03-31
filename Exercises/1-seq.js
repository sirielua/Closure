'use strict';

const myseq = (...args) => arg => {
  const type = typeof arg;
  if (type === 'number') {
    return args.reduce((carry, fn) => fn(carry), arg);
  } else {
    args.unshift(arg);
    return myseq(...args);
  }
};

const seq = f => y => (typeof y === 'number' ? f(y) : seq(x => f(y(x))));

const fns = [seq, myseq];

fns.forEach(fn => {
  console.log(`Running ${fn.name}`);

  const res1 = fn(x => x + 7)(x => x * 2)(5); // 17
  const res2 = fn(x => x * 2)(x => x + 7)(5); // 24
  const res3 = fn(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7); // 3

  console.log(res1);
  console.log(res2);
  console.log(res3);
});

module.exports = { seq };
