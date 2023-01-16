import { Quackable } from './Quackable.type';

export class MallardDuck implements Quackable {
    quack(): void {
        console.log("나는 물오리다");
    }
}
