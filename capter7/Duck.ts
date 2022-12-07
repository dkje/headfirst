export interface Duck {
    quack(): void;
    fly(): void;
}
export class MallardDuck implements Duck {
    quack() {
        console.log("꽥");
    }
    fly() {
        console.log("퍼덕퍼덕퍼덕퍼덕퍼덕");
    }
}
