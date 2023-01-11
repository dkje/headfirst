import { GumballMachineIF } from "../GumballMachine";
import { State } from "./State.type";

export class SoldOutState implements State {
	machine: GumballMachineIF;
	constructor(machine: GumballMachineIF) {
		this.machine = machine;
	}
	insertQuarter(): void {
		console.error("재고가 없습니다.");
	}
	ejectQuarter(): void {
		console.error("재고가 없습니다.");
	}
	turnCrank(): void {
		console.error("재고가 없습니다.");
	}
	dispense(): void {
		console.error("재고가 없습니다.");
	}
}
