import { Goose } from "./Goose";

export class GooseDuckAdapter implements Quackable {
    goose: Goose
    constructor(goose: Goose) {
        this.goose = goose
    }
    quack(): void {
        this.goose.honk();
    }
}