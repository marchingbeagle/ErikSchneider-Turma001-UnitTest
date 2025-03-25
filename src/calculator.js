const somar = (a, b) => {
  return a + b;
};

const diminuir = (a, b) => {
  return a - b;
};

const multiplicar = (a, b) => {
  return a * b;
};

const dividir = (a, b) => {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
};

module.exports = {
  somar,
  diminuir,
  multiplicar,
  dividir,
};
