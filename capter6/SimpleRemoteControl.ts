import { Command } from "./Command.type";

export class SimpleRemoteControl {
    #slot: Command | null = null;
    constructor() {
    }

    setCommand(command: Command) {
        this.#slot = command;
    }

    buttonWasPressed() {
        this.#slot?.execute();
    }
}