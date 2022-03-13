// class decorator
// void return doesnt replace the constructor
function sealed(target: Function): void {
    console.log(`Sealing ${target}`)
    Object.seal(target)
    Object.seal(target.prototype)
}


// class factory decorator
function logger(element: string) {
    return function (target: Function) {
        console.log('logging', element)
    }
}


// class factory decorator
// replaces constructor
function applyVersion<TFunction extends Function>(target: TFunction): TFunction {
    let newConstr: Function = function () {

    }
    newConstr.prototype = Object.create(target.prototype)
    newConstr.prototype.constructor = target;
    newConstr.prototype.version = '2'
    return <TFunction>newConstr;
}


// method decorator
function readonly(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('applying readonly')
    descriptor.writable = false;
}

function writable(isWritable: boolean): Function {
    return function (target: any, name: string, descriptor: PropertyDescriptor) {
        console.log('applying writable')
        descriptor.writable = isWritable;
    }
}

@sealed
@logger('invocation')
@applyVersion
class Form {
    // @readonly
    @writable(false)
    create() {
        console.log('creating')
    }
}

const form = new Form()
form['newProperty'] = "hello"
console.log('New property is', form['newProperty'])
console.log('its version is', form['version'])
