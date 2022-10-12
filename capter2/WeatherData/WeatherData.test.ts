import WeatherData from "./WeatherData";

test("WeaterData는 notifyObserver함수를 실행 시 구독된 옵저버를 실행한다", () => {
	const w = new WeatherData();

	let count = 0;
	const cb = {
		update() {
			count = count + 1;
		},
	};

	w.registerObserver(cb);
	w.notifyObserver();

	expect(count).toBe(1);
});

test("WeaterData는 구독된 옵저버를 삭제할 수 있다", () => {
	const w = new WeatherData();

	let count = 0;
	const cb = {
		update() {
			count = count++;
		},
	};

	w.registerObserver(cb);
	w.removeObserver(cb);
	w.notifyObserver();

	expect(count).toBe(0);
});
