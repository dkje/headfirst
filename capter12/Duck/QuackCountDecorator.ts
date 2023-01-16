export class QuackCountDecorator implements Quackable {
    static quackCount: number = 0;
    quackObj: Quackable
    constructor(quackObj: Quackable) {
        this.quackObj = quackObj;
    }

    static countQuack(): number {
        return QuackCountDecorator.quackCount;
    }
    quack(): void {
        QuackCountDecorator.quackCount += 1;
        this.quackObj.quack();
    }
}