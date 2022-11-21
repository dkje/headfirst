import { Command } from "./Command.type";
import { Garage } from "./Garage";

export default class GarageDoorOpenCommand implements Command {
    #garage: Garage;
    constructor(garage: Garage) {
        this.#garage = garage;
    }
    execute(): void {
        this.#garage.lightOn();
        this.#garage.up();
    }
};
