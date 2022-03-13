// no need new
let mySymbol = Symbol('first_symbol');
let anotherSymbol = Symbol('first_symbol')

console.log(mySymbol == anotherSymbol)
console.log(mySymbol === anotherSymbol)


const UNIQUE_METHOD_NAME = Symbol()

class UniqueConstantDemo {
    [UNIQUE_METHOD_NAME]() {
        console.log('Calling', UNIQUE_METHOD_NAME)
    }
}

let demo = new UniqueConstantDemo()
demo[UNIQUE_METHOD_NAME](); // using symbol as key