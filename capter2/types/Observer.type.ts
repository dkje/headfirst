export default interface Observer {
	update(arg: { temp: number; humidity: number; pressure: number }): void;
}

