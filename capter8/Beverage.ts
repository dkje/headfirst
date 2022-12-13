export abstract class CaffeineBeverage {
    constructor() {
    }

    prepareBeverage() {
        this.boilWater();
        this.brew();
        this.poorInCup();
        this.addCondiments();
    }

    abstract brew(): void;
    abstract addCondiments(): void;

    boilWater() {
        console.log("보글보글");
    }
    poorInCup() {
        console.log("쪼로록...");
    }
}
export class Coffee extends CaffeineBeverage {
    brew(): void {
        console.log(" 드르르르르르르륵 ");
        console.log(" 탈탈탈탈 ");
        console.log(" 똑 똑 똑 ");
    }
    addCondiments(): void {
        console.log("진정한 커피 애호가는 콩 우린 물만 마신다");
    }
}
export class Tea extends CaffeineBeverage {
    brew(): void {
        console.log("찌이익");
        console.log("퐁당");
    }

    addCondiments(): void {
        console.log("우유 추가");
        console.log("펄 추가");
    }
}
