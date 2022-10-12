import Observer from "../types/Observer.type";
import DisplayElement from "../types/DisplayElement.type";
import WeatherData from "../WeatherData/WeatherData";

export default class CurrentConditionsDisplay
	implements Observer, DisplayElement
{
	#temperature!: number;
	#humidity!: number;
	#weatherData: InstanceType<typeof WeatherData>;

	constructor(arg: { weatherData: InstanceType<typeof WeatherData> }) {
		this.#weatherData = arg.weatherData;
		this.#weatherData.registerObserver(this);
	}

	update(arg: { temp: number; humidity: number }): void {
		this.#humidity = arg.humidity;
		this.#temperature = arg.temp;
		this.display();
	}

	display(): void {
		console.log(
			`현재 상태: 온도 ${this.#temperature}F, 습도: ${this.#humidity}%`
		);
	}
}
