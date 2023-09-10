function memoizeFn(fn) {
  let cache = {};
  return function (...args) {
    let key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

function heavyComputefn(num) {
  console.log("computing new sum!!");
  let sum = 0;
  for (let i = 0; i < num; i++) {
    sum += i;
  }
  return sum;
}

const memoizedSumFn = memoizeFn(heavyComputefn);
console.log(memoizedSumFn(100));
console.log(memoizedSumFn(100));
console.log(memoizedSumFn(104));
console.log(memoizedSumFn(100));
console.log(memoizedSumFn(104));
