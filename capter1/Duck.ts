import type { FlyBehavior } from "./types/FlyBehavior.type";
import type { QuackBehavior } from "./types/QuackBehavior.type";

interface IDuck {
	quackBehavior: QuackBehavior;
	flyBehavior: FlyBehavior;
}

class Duck implements IDuck {
	private _quackBehavior;
	private _flyBehavior;

	constructor(arg: { quackBehavior: QuackBehavior; flyBehavior: FlyBehavior }) {
		this._quackBehavior = arg.quackBehavior;
		this._flyBehavior = arg.flyBehavior;
	}

	get flyBehavior() {
		return this._flyBehavior;
	}
	set flyBehavior(newFly: FlyBehavior) {
		this._flyBehavior = newFly;
	}

	get quackBehavior() {
		return this.quackBehavior;
	}
	set quackBehavior(newQuack: QuackBehavior) {
		this._quackBehavior = newQuack;
	}

	performQuack() {
		this._quackBehavior();
	}
	performFly() {
		this._flyBehavior();
	}

	swim() {
		console.log("어푸 어푸");
	}
	display() {
		console.log("펄럭 펄럭");
	}
}
export default Duck;
