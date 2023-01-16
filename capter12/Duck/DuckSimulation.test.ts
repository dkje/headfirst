import { DuckCall } from "./DuckCall";
import { MallardDuck } from "./MallardDuck";
import { RedheadDuck } from "./RedheadDuck";
import { RubberDuck } from "./RubberDuck";

test(`물오리는 quak을 실행할 시 "나는 물오리다" 라고 말한다`, () => {
    const spy = jest.spyOn(console, 'log');

    const duck = new MallardDuck();
    duck.quack();
    expect(spy).toHaveBeenCalledWith("나는 물오리다");
})
test(`흰죽지오리는 quak을 실행할 시 "나는 흰죽지오리다" 라고 말한다`, () => {
    const spy = jest.spyOn(console, 'log');

    const duck = new RedheadDuck();
    duck.quack();
    expect(spy).toHaveBeenCalledWith("나는 흰죽지오리다");
})
test(`고무 오리는 quak을 실행할 시 "삑삑"이 라고 말한다`, () => {
    const spy = jest.spyOn(console, 'log');

    const duck = new RubberDuck();
    duck.quack();
    expect(spy).toHaveBeenCalledWith("삑삑");
})
test(`오리 호출기는 quak을 실행할 시 "꽉꽉" 라고 말한다`, () => {
    const spy = jest.spyOn(console, 'log');

    const duck = new DuckCall();
    duck.quack();
    expect(spy).toHaveBeenCalledWith("꽉꽉");
})
