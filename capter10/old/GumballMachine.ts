import { MachineStatusType } from "./GumballMachine.meta";

interface GumballMachineIF {
    state: keyof MachineStatusType
    count: number;
    insertQuarter(): void;
    ejectQuarter(): void;
    turnCrank(): void;
    dispense(): void;
}


export class GumballMachine implements GumballMachineIF {
    state: keyof MachineStatusType = "SOLD_OUT";
    count: number;
    constructor(count: number) {
        this.count = count
        if (this.count > 0) {
            this.state = 'NO_QUARTER';
        }
    }

    insertQuarter(): void {
        if (this.state === 'HAS_QUARTER') {
            console.error('동전이 이미 있습니다.');
        } else if (this.state === 'NO_QUARTER') {
            console.log('동전을 넣었습니다.')
            this.state = 'HAS_QUARTER';
        } else if (this.state === 'SOLD') {
            console.log('알맹이를 내보내고 있습니다.')
        } else if (this.state === 'SOLD_OUT') {
            console.error('재고가 없습니다.');
        }
    }

    ejectQuarter(): void {
        if (this.state === 'HAS_QUARTER') {
            console.log("동전을 반환합니다.");
            this.state = 'NO_QUARTER'
        } else if (this.state === 'NO_QUARTER') {
            console.error("동전이 없습니다.");
        } else if (this.state === 'SOLD') {
            console.error("동전이 없습니다.");
        } else if (this.state === 'SOLD_OUT') {
            console.error("재고가 없습니다.");
        }
    }

    turnCrank(): void {
        if (this.state === 'HAS_QUARTER') {
            console.log("손잡이를 돌리셨습니다.");
            this.state = 'SOLD';
        } else if (this.state === 'NO_QUARTER') {
            console.error('동전을 넣어주세요.');
        } else if (this.state === 'SOLD') {
            console.error('손잡이는 한 번만 돌려 주세요.')
        } else if (this.state === 'SOLD_OUT') {
            console.error("재고가 없습니다.")
        }
    }

    dispense(): void {
        if (this.state === 'HAS_QUARTER') {
            console.error("손잡이를 돌려주세요.")
        } else if (this.state === 'NO_QUARTER') {
            console.error("동전을 넣어주세요.")
        } else if (this.state === 'SOLD') {
            if (this.count) {
                console.log("알맹이를 내보내고 있습니다.");
                this.count = this.count - 1;
            } else {
                console.error("더 이상 알맹이가 없습니다.");
            }
            this.state = this.count ? 'NO_QUARTER' : 'SOLD_OUT';
        } else if (this.state === 'SOLD_OUT') {
            console.error('재고가 없습니다.')
        }
    }
}