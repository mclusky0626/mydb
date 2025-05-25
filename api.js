const { chemicalEquationBalancer } = require('chemical-equation-balancer-haizuka');

const cbe = chemicalEquationBalancer("CaCo3 + H2O = Ca2 + H + O");
const textResult = cbe.text;

console.log(textResult); // 2H2 + O2 = 2H2O
