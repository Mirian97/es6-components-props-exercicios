function sum(...args) {
  const reduceSum = args.reduce((acum, val) => acum + val);
  return reduceSum;
}

console.log(sum(1, 3, 4, 5, 6, 7, 8, 9, 0, 5));

