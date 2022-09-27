import { FlyBehavior } from "./types/FlyBehavior.type";
import { QuackBehavior } from "./types/QuackBehavior.type";
export class FlyWithWings implements FlyBehavior {
	constructor() {}
	fly() {
		console.log("퍼덕~ 퍼덕~");
	}
}

export class FlyNoWay {
	constructor() {}
	fly() {
		console.log("아무것도 하지 않음...");
	}
}

export class Quack implements QuackBehavior {
	quack() {
		console.log("꽥.. 꽥...");
	}
}

export class Squeak implements QuackBehavior {
	quack() {
		console.log("삑 삑...");
	}
}

export class MuteQuack implements QuackBehavior {
	quack() {
		console.log(".....");
	}
}
