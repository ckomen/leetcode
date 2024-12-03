function compose(functions) {
    return function(x) {
        return functions.reduceRight((acc, fn) => fn(acc), x);
    };
}
const functions1 = [x => x + 1, x => x * x, x => 2 * x];
const composedFunction1 = compose(functions1);
console.log(composedFunction1(4)); // Output: 65
const functions2 = [x => 10 * x, x => 10 * x, x => 10 * x];
const composedFunction2 = compose(functions2);
console.log(composedFunction2(1)); // Output: 1000
const functions3 = [];
const composedFunction3 = compose(functions3);
console.log(composedFunction3(42)); // Output: 42