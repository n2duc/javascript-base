function* exampleFunc(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
}
function* generatorFunc(i) {
    yield i;
    yield* exampleFunc(i);
    yield i + 5;
}
const generator = generatorFunc(10);
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

console.log("logGenerator");
function* logGenerator() {
    console.log(0);
    console.log(1, yield);
    console.log(2, yield);
    console.log(3, yield);
}

const gen = logGenerator();
gen.next();
gen.next("Ngoc");
gen.next("Duc");

console.log("yieldAndReturn");
function* yieldAndReturn() {
    yield "Y";
    return "R";
    yield "unreachable";
}

const genReturn = yieldAndReturn();
console.log(genReturn.next());
console.log(genReturn.next());
console.log(genReturn.next());

// Object property
const someObj = {
    *generator() {
        yield "a";
        yield "b";
    },
};
const genObj = someObj.generator();
console.log(genObj.next().value);