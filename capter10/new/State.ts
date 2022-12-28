import { GumballMachineIF } from "./GumballMachine";

export interface State {
    insertQuarter(): void;
    ejectQuarter(): void;
    turnCrank(): void;
    dispense(): void;
}

export class SoldState implements State {
    machine: GumballMachineIF;
    constructor(machine: GumballMachineIF) {
        this.machine = machine;
    }
    insertQuarter(): void {
        console.log("알맹이를 내보내고 있습니다.");
    }
    ejectQuarter(): void {
        console.error('동전이 없습니다.');
    }
    turnCrank(): void {
        console.error('손잡이는 한 번만 돌려 주세요.');
    }
    dispense(): void {
        if (this.machine.count > 0) {
            console.log('알맹이를 내보내고 있습니다.');
            this.machine.count = this.machine.count - 1;
        } else {
            console.error('더 이상 알맹이가 없습니다.')
        }
        const newState = this.machine.count > 0 ? this.machine.noQuarterState : this.machine.soldOutState
        this.machine.setState(newState);
    }
}
export class SoldOutState implements State {
    machine: GumballMachineIF;
    constructor(machine: GumballMachineIF) {
        this.machine = machine;
    }
    insertQuarter(): void {
        console.error('재고가 없습니다.')
    }
    ejectQuarter(): void {
        console.error('재고가 없습니다.')
    }
    turnCrank(): void {
        console.error('재고가 없습니다.')
    }
    dispense(): void {
        console.error('재고가 없습니다.')
    }
}
export class NoQuarterState implements State {
    machine: GumballMachineIF;
    constructor(machine: GumballMachineIF) {
        this.machine = machine;
    }
    insertQuarter(): void {
        this.machine.setState(this.machine.hasQuarterState);
        console.log('동전을 넣었습니다.');
    }
    ejectQuarter(): void {
        console.error('동전이 없습니다.')
    }
    turnCrank(): void {
        console.error('동전을 넣어주세요.')
    }
    dispense(): void {
        console.error('동전을 넣어주세요.')
    }
}
export class HasQuarterState implements State {
    machine: GumballMachineIF;
    constructor(machine: GumballMachineIF) {
        this.machine = machine;
    }
    insertQuarter(): void {
        console.error('동전이 이미 있습니다.');
    }
    ejectQuarter(): void {
        console.log("동전을 반환합니다.");
        this.machine.setState(this.machine.noQuarterState);
    }
    turnCrank(): void {
        this.machine.setState(this.machine.soldState);
        console.log("손잡이를 돌리셨습니다.");
    }
    dispense(): void {
        console.error('손잡이를 돌려주세요.')
    }
}
