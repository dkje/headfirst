 
import { GumballMachineIF } from "../../GumballMachine.type";
import { State } from "./State.type";

export class NoQuarterState implements State {
	machine: GumballMachineIF;
	constructor(machine: GumballMachineIF) {
		this.machine = machine;
	}
	getState(): string {
		return 'NO_QUARTER';
	}
	insertQuarter(): void {
		this.machine.setState(this.machine.hasQuarterState);
		console.log("동전을 넣었습니다.");
	}
	ejectQuarter(): void {
		console.error("동전이 없습니다.");
	}
	turnCrank(): void {
		console.error("동전을 넣어주세요.");
	}
	dispense(): void {
		console.error("동전을 넣어주세요.");
	}
}
