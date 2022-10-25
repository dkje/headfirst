interface SimplePizzaFactory {
	createPizza(type: string): Pizza;
}

interface Pizza {
	prepare(): void;
	bake(): void;
	cut(): void;
	box(): void;
}

abstract class PizzaStore {
	orderPizza(type: string): Pizza {
		const pizza = this.createPizza(type);
		pizza.prepare();
		pizza.bake();
		pizza.cut();
		pizza.box();
		return pizza;
	}

	abstract createPizza(type: string): Pizza;
}


