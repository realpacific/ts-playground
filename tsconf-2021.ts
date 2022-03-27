// https://www.youtube.com/watch?v=V5OnAN63vls

//#region Template Literal Types

type EventName<T extends string> = `${T}Changed`

type MouseEventName = EventName<'Mouse'>
type KeyboardEventName = EventName<'Keyboard'>

const me0: MouseEventName = 'MouseChanged'
const ke0: KeyboardEventName = 'KeyboardChanged'


//-----
type DirectionTypes = `${'top' | 'bottom'}-${'left' | 'right'}`
const direction1: DirectionTypes = 'top-right'
const direction2: DirectionTypes = 'top-left'
const direction3: DirectionTypes = 'bottom-left'


//-----
type StringNumberDash = `${string}-${number}`
type StringStringDash = `${string}-${string}`
type StringStringStringDash = `${string}-${string}-${string}`

const d0: StringNumberDash = 'hello-12'
const d1: StringNumberDash = 'hello-12.0'
const d2: StringStringDash = 'hello-world'


//#endregion


//#region Inference with recursive conditional types

type Trim<S extends string> =
    S extends ` ${infer T}`
        ? Trim<T>
        : S extends `${infer T} `
            ? Trim<T>
            : S

type T1 = Trim<'hello       '>
type T2 = Trim<'    hello       '>

const t1: T1 = 'hello'
const t2: T1 = 'hello'

//#endregion


//#region Inference

//region infer
type PlaceHolder<T extends string> =
    T extends `${string}{${infer K}}${infer V}` ? K | PlaceHolder<V> : never

declare function format<S extends string>(
    template: S,
    args: Record<PlaceHolder<S>, unknown> // Record<"name" | "age", unknown>
): string

const p0 = format('hello this is {name}. I am ${age}', {name: 'Prashant', age: 25})

//#endregion

//#region Express like
type RouteParamName<T extends string> =
    T extends `${string}:${infer PARAM}/${infer REMAINING}`
        ? PARAM | RouteParamName<REMAINING>
        : T extends `${string}:${infer PARAM}`
            ? PARAM
            : never

declare function declareGet<R extends string>(route: R, handler: Record<RouteParamName<R>, unknown>);

const r0 = declareGet('/users/:userId/comments/:commendId', {userId: 100, commendId: '1'})

//#endregion

//region Path params
type PathKeys<T> =
    object extends T
        ? string
        : T extends readonly any[]
            ? Extract<keyof T, `${number}`> | SubKeys<T, Extract<keyof T, `${number}`>>
            : T extends object
                ? Extract<keyof T, string> | SubKeys<T, Extract<keyof T, string>>
                : never


type SubKeys<T, K extends string> = K extends keyof T ? `${K}.${PathKeys<T[K]>}` : never;

const person = {
    age: 25,
    name: {
        firstName: 'P',
        lastName: 'B'
    },
    addresses: [
        {city: 'Kathmandu', province: 'Bagmati'},
        {city: 'Patan', province: 'Bagmati'}
    ]
}

declare function getProps<T, P extends PathKeys<T>>(obj: T, params: P): string;

getProps(person, 'name.firstName')
// getProps(person, 'addresses.0.city') // TODO why didn't it work
//#endregion

//#endregion