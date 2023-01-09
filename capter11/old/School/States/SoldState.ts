
import { GumballMachineIF } from "../../GumballMachine.type";
import { State } from "./State.type";

export class SoldState implements State {
	machine: GumballMachineIF;
	constructor(machine: GumballMachineIF) {
		this.machine = machine;
	}
	getState(): string {
		return 'SOLD';
	}
	insertQuarter(): void {
		console.log("알맹이를 내보내고 있습니다.");
	}
	ejectQuarter(): void {
		console.error("동전이 없습니다.");
	}
	turnCrank(): void {
		console.error("손잡이는 한 번만 돌려 주세요.");
	}
	dispense(): void {
		if (this.machine.count > 0) {
			this.machine.releaseBall();
		} else {
			console.error("더 이상 알맹이가 없습니다.");
		}
		const newState = this.machine.count > 0
			? this.machine.noQuarterState
			: this.machine.soldOutState;
		this.machine.setState(newState);
	}
}
