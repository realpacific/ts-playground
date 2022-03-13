class Iter {
    private list: Array<number> = []

    constructor() {
        for (let i = 0; i < 25; i++) {
            this.list.push(i)
        }
    }

    [Symbol.iterator]() {
        let index = 0;
        let iter = this.list;
        return {
            next(): IteratorResult<number> {
                return {
                    done: index == iter.length,
                    value: iter[index++]
                }
            }
        }
    }
}


const iter = new Iter();
for (const it of iter) {
    console.log(it)
}