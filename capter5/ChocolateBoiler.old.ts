class ChocolateBoiler {
	#empty: boolean;
	#boiled: boolean;
	static chocolateBoiler: ChocolateBoiler = new ChocolateBoiler();

	//! js 는 constructor가 예약어라 타입스크립트의 도움 없이 # 프라이빗으로 바꾸는게 불가능
	private constructor() {
		this.#empty = true;
		this.#boiled = false;
	}

	static getInstance() {
		return ChocolateBoiler.chocolateBoiler;
	}

	isEmpty() {
		return this.#empty;
	}

	isBoiled() {
		return this.#boiled;
	}

	fill(): void {
		if (!this.isEmpty()) return;
		// 보일러에 우유와 초콜렛을 혼합한 재료를 넣음
		this.#empty = false;
		this.#boiled = false;
	}

	drain() {
		if (!this.isBoiled()) return;
		if (this.isEmpty()) return;
		// 끓는 초콜렛을 다음 단계로 넘긴다
		this.#empty = true;
	}

	boil() {
		if (this.isEmpty()) return;
		if (this.isBoiled()) return;
		// 채워져있으면 끓인다
		this.#boiled = true;
	}
}

export default ChocolateBoiler;
