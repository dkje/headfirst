
import { GumballMachineIF } from "../../GumballMachine.type";
import { State } from "./State.type";


export class WinnerState implements State {
	machine: GumballMachineIF;

	constructor(machine: GumballMachineIF) {
		this.machine = machine;
	}

	getState(): string {
		return 'WINNER';
	}
	insertQuarter(): void {
		console.error("동전이 이미 있습니다.");
	}
	ejectQuarter(): void {
		console.error("동전을 되돌릴 수 없습니다.");
	}
	turnCrank(): void {
		console.error("이미 손잡이를 돌렸습니다.");
	}

	dispenseRoutine(): void {
		if (this.machine.count > 0) {
			this.machine.releaseBall();
		} else {
			console.log("미안해요! 남은 알맹이가 없어요!");
		}
	}
	changeState(): void {
		if (this.machine.count > 0) {
			this.machine.setState(this.machine.noQuarterState);
		} else {
			this.machine.setState(this.machine.soldOutState);
		}
	}

	dispense(): void {
		this.dispenseRoutine();
		this.dispenseRoutine();
		this.changeState();
	}
}
