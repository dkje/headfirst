import {
	State,
} from "./States/State.type";
import { SoldState } from "./States/SoldState";
import { SoldOutState } from "./States/SoldOutState";
import { NoQuarterState } from "./States/NoQuarterState";
import { HasQuarterState } from "./States/HasQuarterState";
import { WinnerState } from "./States/WinnerState";
import { GumballMachineIF } from "../GumballMachine.type";

export class GumballMachine implements GumballMachineIF {
	count: number;
	soldState: State;
	soldOutState: State;
	hasQuarterState: State;
	noQuarterState: State;
	winnerState: State;
	_state: State;
	location: string;

	constructor(location: string, count: number) {
		this.location = location;
		this.count = count;
		this.soldOutState = new SoldOutState(this);
		this.soldState = new SoldState(this);
		this.hasQuarterState = new HasQuarterState(this);
		this.noQuarterState = new NoQuarterState(this);
		this.winnerState = new WinnerState(this);
		if (count > 0) {
			this._state = this.noQuarterState;
		} else {
			this._state = this.soldOutState;
		}
	}
	releaseBall(): void {
		console.log("알맹이를 내보내고 있습니다");
		this.count = this.count - 1;
	}
	insertQuarter(): void {
		this._state.insertQuarter();
	}
	ejectQuarter(): void {
		this._state.ejectQuarter();
	}
	turnCrank(): void {
		this._state.turnCrank();
	}
	dispense(): void {
		this._state.dispense();
	}
	setState(state: State) {
		this._state = state;
	}
	getState(){
		return this._state.getState();
	}
}
