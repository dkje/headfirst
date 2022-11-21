// my-singleton.js
let somePrivateState: string[] = []
Object.freeze(somePrivateState);

export default {
    get state() {
        return somePrivateState;
    },
    set state(value: string[]) {
        somePrivateState = value;
    }
}