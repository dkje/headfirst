import singleton from "./Singleton";

test("싱글톤 데코레이터는 class를 싱글톤으로 만든다", () => {
	@singleton
	class Dummy {}

	// expect(Dummy.getInstance() === Dummy.getInstance()).toBe(true);
	expect(new Dummy() === new Dummy()).toBe(true);
});
