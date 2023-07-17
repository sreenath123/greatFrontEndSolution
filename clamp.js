const clamp = (numToClamp, lbound, ubound) => {
  if (numToClamp < lbound) return lbound;
  if (numToClamp > ubound) return ubound;
  return numToClamp;
};

console.log(clamp(23, -5, 5)); // expected 5
console.log(clamp(-9, -5, 5)); // expected -5
console.log(clamp(2, -5, 5)); // expected 2
