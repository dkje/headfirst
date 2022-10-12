import CurrentConditionsDisplay from "./CurrentConditionsDisplay";
import WeatherData from "../WeatherData/WeatherData";

test("CurrentConditionsDisplay는 display시 온도와 습도 정보를 표시한다 ", () => {
	const weatherData = new WeatherData();
	new CurrentConditionsDisplay({
		weatherData,
	});
	const consoleSpy = jest.spyOn(console, "log");
	const temp = 36;
	const humidity = 20;
	const pressure = 66;
	weatherData.setMeasurements({ temperature: temp, humidity, pressure });

	expect(consoleSpy).toHaveBeenCalledWith(
		`현재 상태: 온도 ${temp}F, 습도: ${humidity}%`
	);
});

test("CurrentConditionsDisplay는 weatherData를 구독한다", () => {
	const weatherData = new WeatherData();
	const currentConditionsDisplay = new CurrentConditionsDisplay({
		weatherData,
	});
	jest.spyOn(currentConditionsDisplay, "update");
	weatherData.measurementsChanged();
	expect(currentConditionsDisplay.update).toHaveBeenCalled();
});
