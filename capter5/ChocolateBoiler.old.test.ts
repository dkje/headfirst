import ChocolateBoiler from "./ChocolateBoiler.old";

const setup = () => {};

test("초콜렛 보일러는 싱글톤을 구현한다.", () => { 
	expect(ChocolateBoiler.getInstance() === ChocolateBoiler.getInstance()).toBe(
		true
	);
});
