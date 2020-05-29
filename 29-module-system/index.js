var Mouse = require('./mouse');
var Cat = require('./cat');

var mickey = new Mouse('black');
var jerry = new Mouse('orange');

console.log(mickey);
console.log(jerry);

var dihea = new Cat();
dihea.eat(mickey);
dihea.eat(jerry);
console.log(dihea);


