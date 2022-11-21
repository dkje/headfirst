import { Command } from "./Command.type";
import { Light } from "./Light.type";

export class LightOnCommand implements Command {
    #light: Light;

    constructor(light: Light) {
        this.#light = light;
    };

    execute(): void {
        this.#light.on();
    }
}