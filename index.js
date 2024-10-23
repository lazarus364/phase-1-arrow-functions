function divide(a, b) {
    return a / b;
  }
  
  const square = (x) => x * x;
  
  const add = (a, b) => a + b;
  
  if (typeof module !== 'undefined') {
    module.exports = { divide, square, add };
  }