import Observer from "./Observer.type";

export default interface Subject {
	registerObserver(o: Observer): void;
	removeObserver(o: Observer): void;
	notifyObserver();
}
