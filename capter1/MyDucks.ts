import Duck from "./Duck";

export class MallardDuck extends Duck {
	display(): void {
		// 물오리 모양 표시
	}
}

export class RedheadDuck extends Duck {
	display(): void {
		// 붉은 머리 오리 모양 표시
	}
}

export class RubberDuck extends Duck {
	display(): void {
		// 고무 오리 모양 표시
	}
}

export class DecoyDuck extends Duck {
	display(): void {
		// 가짜 오리 모양 표시
	}
}
