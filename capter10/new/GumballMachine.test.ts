import { GumballMachine } from "./GumballMachine";
describe("풍선껌 기계", () => {
	const getGumballMachine = (count: number): GumballMachine => {
		const gumball = new GumballMachine(count);
		return gumball;
	};

	// !인스턴스 프로퍼티에 따른 상태 변경 이벤트 테스트
	test(`재고가 있게 생성 되었을 때 SOLD 상태를 갖는다`, () => {
		const gumball = getGumballMachine(5);
		expect(gumball.state).toBe("NO_QUARTER");
	});
	test("재고 없이 생성 되었을 때 SOLD_OUT 상태를 갖는다", () => {
		const gumball = getGumballMachine(0);
		expect(gumball.state).toBe("SOLD_OUT");
	});

	test("재고가 0이 되면 SOLD_OUT 상태를 갖는다", () => {
		const gumball = getGumballMachine(0);
		gumball.insertQuarter();
		gumball.turnCrank();
		gumball.dispense();
		expect(gumball.state).toBe("SOLD_OUT");
	});

	test(`동전이 없고 재고가 있다면 상태를 'NO_QUARTER'상태를 갖는다`, () => {
		const gumball = getGumballMachine(1);
		expect(gumball.state).toBe("NO_QUARTER");
	});

	test(`동전이 있고 재고가 있다면 상태를 'HAS_QUARTER'상태를 갖는다`, () => {
		const gumball = getGumballMachine(1);
		gumball.insertQuarter();
		expect(gumball.state).toBe("HAS_QUARTER");
	});

	// !HAS_QUARTER 상태의 기능 구현 테스트
	const getHasQuarterMachine = () => {
		const gumball = getGumballMachine(5);
		gumball.setState(gumball.hasQuarterState);
		return gumball;
	};
	
	test("getHasQuarterMachine는 HAS_QUARTER 상태의 인스턴스를 반환한다", () => {
		expect(getHasQuarterMachine().state).toBe("HAS_QUARTER");
	});

	test(`HAS_QUARTER 상태 일 때 insertQuarter를 실행하면 오류를 출력한다`, () => {
		const gumball = getHasQuarterMachine();
		const spyConsole = jest.spyOn(global.console, "error");
		gumball.insertQuarter();
		expect(spyConsole).toHaveBeenCalledWith("동전이 이미 있습니다.");
	});

	test(`HAS_QUARTER 상태 일 때 ejectQuarter를 실행하면 동전을 반환하고 상태를 NO_QUARTER로 변경한다`, () => {
		const gumball = getHasQuarterMachine();
		const spyConsole = jest.spyOn(console, "log");
		gumball.ejectQuarter();
		expect(spyConsole).toHaveBeenCalledWith("동전을 반환합니다.");
		expect(gumball.state).toBe("NO_QUARTER");
	});

	test(`HAS_QUARTER 상태 일 때 turnCrank를 실행하면 행동문을 출력하고 상태를 SOLD로 변경한다`, () => {
		const gumball = getHasQuarterMachine();
		const spyConsole = jest.spyOn(console, "log");
		gumball.turnCrank();
		expect(spyConsole).toHaveBeenCalledWith("손잡이를 돌리셨습니다.");
		expect(["SOLD", "WINNER"].includes(gumball.state)).toBe(true);
	});

	test(`HAS_QUARTER 상태 일 때 dispense를 실행하면 에러를 출력한다`, () => {
		const gumball = getHasQuarterMachine();
		const spyConsole = jest.spyOn(console, "error");
		gumball.dispense();
		expect(spyConsole).toHaveBeenCalledWith("손잡이를 돌려주세요.");
	});

	// !NO_QUARTER 상태의 기능 구현 테스트
	const getNoQuarterMachine = () => {
		const gumball = getGumballMachine(4);
		gumball.setState(gumball.noQuarterState);
		return gumball;
	};
	test("getNoQuarterMachine는 NO_QUARTER 상태의 인스턴스를 반환한다", () => {
		expect(getNoQuarterMachine().state).toBe("NO_QUARTER");
	});
	test(`NO_QUARTER 상태 일 때 insertQuarter를 실행하면 동전 삽입 문구를 출력하고, 상태를 HAS_QUARTER로 변경한다.`, () => {
		const gumball = getNoQuarterMachine();
		const spyConsole = jest.spyOn(console, "log");
		gumball.insertQuarter();
		expect(gumball.state).toBe("HAS_QUARTER");
		expect(spyConsole).toHaveBeenCalledWith("동전을 넣었습니다.");
	});

	test(`NO_QUARTER 상태 일 때 ejectQuarter를 실행하면 오류를 출력한다`, () => {
		const gumball = getNoQuarterMachine();
		const spyConsole = jest.spyOn(console, "error");
		gumball.ejectQuarter();
		expect(spyConsole).toHaveBeenCalledWith("동전이 없습니다.");
	});

	test(`NO_QUARTER 상태 일 때 turnCrank를 실행하면 오류를 출력한다`, () => {
		const gumball = getNoQuarterMachine();
		const spyConsole = jest.spyOn(console, "error");
		gumball.turnCrank();
		expect(spyConsole).toHaveBeenCalledWith("동전을 넣어주세요.");
	});

	test(`NO_QUARTER 상태 일 때 dispense를 실행하면 에러를 출력한다`, () => {
		const gumball = getNoQuarterMachine();
		const spyConsole = jest.spyOn(console, "error");
		gumball.dispense();
		expect(spyConsole).toHaveBeenCalledWith("동전을 넣어주세요.");
	});

	// !SOLD_OUT 상태의 기능 구현 테스트
	const getSoldOutMachine = () => {
		const gumball = getGumballMachine(0);
		gumball.setState(gumball.soldOutState);
		return gumball;
	};

	test("getSoldOutMachine은 SOLD_OUT 상태의 인스턴스를 반환한다", () => {
		expect(getSoldOutMachine().state).toBe("SOLD_OUT");
	});

	test(`SOLD_OUT 상태 일 때 insertQuarter를 실행하면 에러를 출력합니다`, () => {
		const gumball = getSoldOutMachine();
		const spyConsole = jest.spyOn(console, "error");
		gumball.insertQuarter();
		expect(spyConsole).toHaveBeenCalledWith("재고가 없습니다.");
	});

	test(`SOLD_OUT 상태 일 때 ejectQuarter를 실행하면 에러를 출력합니다`, () => {
		const gumball = getSoldOutMachine();
		const spyConsole = jest.spyOn(console, "error");
		gumball.insertQuarter();
		expect(spyConsole).toHaveBeenCalledWith("재고가 없습니다.");
	});

	test(`SOLD_OUT 상태 일 때 turnCrank를 실행하면 오류를 출력한다`, () => {
		const gumball = getSoldOutMachine();
		const spyConsole = jest.spyOn(console, "error");
		gumball.insertQuarter();
		expect(spyConsole).toHaveBeenCalledWith("재고가 없습니다.");
	});

	test(`SOLD_OUT 상태 일 때 dispense를 실행하면 에러를 출력합니다`, () => {
		const gumball = getSoldOutMachine();
		const spyConsole = jest.spyOn(console, "error");
		gumball.insertQuarter();
		expect(spyConsole).toHaveBeenCalledWith("재고가 없습니다.");
	});

	// !SOLD 상태의 기능 구현 테스트
	const getSoldMachine = (count: number = 1) => {
		const gumball = getGumballMachine(count);
		gumball.setState(gumball.soldState);
		return gumball;
	};
	test("getSoldMachine은 SOLD 상태의 인스턴스를 반환한다", () => {
		expect(getSoldOutMachine().state).toBe("SOLD_OUT");
	});
	test(`SOLD 상태 일 때 insertQuarter를 실행하면 대기 문구를 출력합니다`, () => {
		const gumball = getSoldMachine();
		const spyConsole = jest.spyOn(console, "log");
		gumball.insertQuarter();
		expect(spyConsole).toHaveBeenCalledWith("알맹이를 내보내고 있습니다.");
	});

	test(`SOLD 상태 일 때 ejectQuarter를 실행하면 오류를 출력한다`, () => {
		const gumball = getSoldMachine();
		const spyConsole = jest.spyOn(console, "error");
		gumball.ejectQuarter();
		expect(spyConsole).toHaveBeenCalledWith("동전이 없습니다.");
	});

	test(`SOLD 상태 일 때 turnCrank를 실행하면 오류를 출력한다`, () => {
		const gumball = getSoldMachine();
		const spyConsole = jest.spyOn(console, "error");
		gumball.turnCrank();
		expect(spyConsole).toHaveBeenCalledWith("손잡이는 한 번만 돌려 주세요.");
	});

	test(`SOLD 상태 일 때 dispense를 실행하면 재고가 있을 경우 재고를 -1 한다`, () => {
		const gumball = getSoldMachine(1);
		gumball.dispense();
		expect(gumball.count).toBe(0);
		gumball.dispense();
		expect(gumball.count).toBe(0);
	});

	test(`SOLD 상태 일 때 dispense 실행 시, 변경된 count가
    0보다 크다면 상태를 NO_QUARTER로, 작다면 SOLD_OUT으로 변경한다 .`, () => {
		const gumball = getSoldMachine();
		gumball.dispense();
		expect(gumball.state).toBe("SOLD_OUT");
		const gumball2 = getSoldMachine(2);
		gumball2.dispense();
		expect(gumball2.state).toBe("NO_QUARTER");
	});
});
