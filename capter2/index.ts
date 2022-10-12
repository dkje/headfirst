import CurrentConditionsDisplay from "./CurrentConditionsDisplay/CurrentConditionsDisplay";
import WeatherData from "./WeatherData/WeatherData";

(function main() {
	const weatherData = new WeatherData();
	new CurrentConditionsDisplay({ weatherData });

	console.log("뭐임..");
	weatherData.setMeasurements({ temperature: 33, humidity: 50, pressure: 30 });
	weatherData.setMeasurements({ temperature: 35, humidity: 670, pressure: 21 });
})();
