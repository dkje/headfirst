import { GumballMachineIF } from "../GumballMachine.type";

export class GumballMonitor {
    machine: GumballMachineIF;
    constructor(machine: GumballMachineIF) {
        this.machine = machine;
    }

    report() {
        console.log(`현재 기계 위치: ${this.machine.location}`);
        console.log(`현재 재고: ${this.machine.count}`);
        console.log(`현재 상태: ${this.machine.getState()}`);
    }
}