import { Beverage as BeverageIF } from "../Beverage/Beverage.type";
import Beverage from "../Beverage/Beverage";
abstract class CondimentDecorator extends Beverage implements BeverageIF {
	abstract getDescription(): string;
}
export default CondimentDecorator;
