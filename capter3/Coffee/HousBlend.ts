import Beverage from "../Beverage/Beverage";

class HouseBlend extends Beverage {
	description: string;
	constructor() {
		super();
		this.description = "하우스 블랜드";
	}
	cost() {
		return 0.89;
	}
}

export default HouseBlend;
