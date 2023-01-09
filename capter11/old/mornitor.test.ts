import { GumballMonitor } from "./Office/GumballMonitor";
import { GumballMachine } from "./School/GumballMachine"

test('모니터는 현재 기계의 상태를 출력한다', () => {
    const machine = new GumballMachine('서초구', 120);
    const monitor = new GumballMonitor(machine);

    const spyConsole = jest.spyOn(global.console, "log");
    monitor.report();
    expect(spyConsole).toHaveBeenCalledWith("현재 기계 위치: 서초구");
    expect(spyConsole).toHaveBeenCalledWith("현재 재고: 120");
    expect(spyConsole).toHaveBeenCalledWith("현재 상태: NO_QUARTER");
})