


variable = 10;

(() = {
foo = 100;
console. log(variable) ;
var foo = 100;
variable = 20;
console. log(variable);
})();

console. log(foo);
console. log(variable);
var variable = 30;

// Output:

// undefined aaega bcz foo function ke andar declare hua hai aur uska scope function ke andar hi hai