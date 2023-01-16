import { DuckCall } from "./DuckCall";
import { Goose } from "./Goose";
import { GooseDuckAdapter } from "./GooseDuckAdapter";
import { MallardDuck } from "./MallardDuck";
import { QuackCountDecorator } from "./QuackCountDecorator";
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
test(`거위는 quak을 실행할 시 "끽끽" 라고 말한다`, () => {
    const spy = jest.spyOn(console, 'log');

    const gooseLikeDuck = new GooseDuckAdapter(new Goose());
    gooseLikeDuck.quack();
    expect(spy).toHaveBeenCalledWith("끽끽");
})


test(`QuackCountDecorator는 수식한 애들이 꽥꽥된 횟수를 셀 수 있다`, () => {
    const malDuck = new QuackCountDecorator(new MallardDuck());
    const redheadDuck = new QuackCountDecorator(new RedheadDuck());
    const rubberDuck = new QuackCountDecorator(new RubberDuck());
    redheadDuck.quack();
    rubberDuck.quack();
    malDuck.quack();
    expect(QuackCountDecorator.countQuack()).toBe(3);
})