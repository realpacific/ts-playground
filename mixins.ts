class Employee {
    logTitle() {
    }
}

class Researcher {
    research(topic: string) {
    }
}

interface ITeacher {
}

class UniversityTeacher implements ITeacher, Employee, Researcher {
    research: (topic: string) => void;
    logTitle: () => void;
}

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype)
            .forEach(name => {
                derivedCtor.prototype[name] = baseCtor.prototype[name]
            })
    })
}

applyMixins(UniversityTeacher, [Employee, Researcher]);

export {Researcher, UniversityTeacher, Employee}

