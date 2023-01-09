import { State } from "./School/States/State.type";


export interface GumballMachineIF {
	_state: State;
	count: number;
	location: string;
	insertQuarter(): void;
	ejectQuarter(): void;
	turnCrank(): void;
	getState(): string;
	dispense(): void;
	setState(state: State): void;
	soldState: State;
	soldOutState: State;
	hasQuarterState: State;
	noQuarterState: State;
	winnerState: State;
	releaseBall(): void;
}
