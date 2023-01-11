import { GumballMachineIF } from "../GumballMachine";
import { State } from "./State.type";

export class HasQuarterState implements State {
	machine: GumballMachineIF;
	constructor(machine: GumballMachineIF) {
		this.machine = machine;
	}
	insertQuarter(): void {
		console.error("동전이 이미 있습니다.");
	}
	ejectQuarter(): void {
		console.log("동전을 반환합니다.");
		this.machine.setState(this.machine.noQuarterState);
	}
	turnCrank(): void {
		const maybeWinner = Math.random() * 10 >= 5;
		this.machine.setState(maybeWinner ? this.machine.winnerState : this.machine.soldState);
		console.log("손잡이를 돌리셨습니다.");
	}
	dispense(): void {
		console.error("손잡이를 돌려주세요.");
	}
}
