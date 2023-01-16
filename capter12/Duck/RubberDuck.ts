import { Quackable } from './Quackable.type';

export class RubberDuck implements Quackable {
    quack(): void {
        console.log("삑삑");
    }
}
