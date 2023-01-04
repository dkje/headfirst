import {
	State,
	SoldOutState,
	SoldState,
	HasQuarterState,
	NoQuarterState,
	WinnerState,
} from "./State";

export interface GumballMachineIF {
	_state: State;
	count: number;
	insertQuarter(): void;
	ejectQuarter(): void;
	turnCrank(): void;
	dispense(): void;
	setState(state: State): void;
	soldState: State;
	soldOutState: State;
	hasQuarterState: State;
	noQuarterState: State;
	winnerState: State;
	releaseBall(): void;
}

export class GumballMachine implements GumballMachineIF {
	count: number;
	soldState: State;
	soldOutState: State;
	hasQuarterState: State;
	noQuarterState: State;
	winnerState: State;
	_state: State;

	constructor(count: number) {
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

	get state() {
		if (this._state instanceof SoldOutState) {
			return "SOLD_OUT";
		}
		if (this._state instanceof SoldState) {
			return "SOLD";
		}
		if (this._state instanceof HasQuarterState) {
			return "HAS_QUARTER";
		}
		if (this._state instanceof NoQuarterState) {
			return "NO_QUARTER";
		}
        
		return "WINNER";
	}

	setState(state: State) {
		this._state = state;
	}
}
