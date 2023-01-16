import { Quackable } from './Quackable.type';

export class RedheadDuck implements Quackable {
    quack(): void {
        console.log("나는 흰죽지오리다");
    }
}
