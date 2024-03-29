import Observer from "../types/Observer.type";
import Subject from "../types/Subject.type";

export default class WeatherData implements Subject {
	#observers: Array<Observer> = [];
	#temperature!: number;
	#humidity!: number;
	#pressure!: number;

	constructor() {}

	get temperature() {
		return this.#temperature;
	}
	get humidity() {
		return this.#humidity;
	}
	get pressure() {
		return this.#pressure;
	}

	registerObserver(o: Observer): void {
		this.#observers.push(o);
	}

	removeObserver(o: Observer): void {
		this.#observers = this.#observers.filter((cur) => cur !== o);
	}

	notifyObserver() {
		this.#observers.forEach((o) => {
			o.update();
		});
	}

	measurementsChanged() {
		this.notifyObserver();
	}

	setMeasurements(arg: {
		temperature: number;
		humidity: number;
		pressure: number;
	}) {
		this.#humidity = arg.humidity;
		this.#pressure = arg.pressure;
		this.#temperature = arg.temperature;
		this.measurementsChanged();
	}
}
