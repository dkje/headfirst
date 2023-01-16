import { Quackable } from './Quackable.type';

export class DuckCall implements Quackable {
    quack(): void {
        console.log("꽉꽉");
    }
}
