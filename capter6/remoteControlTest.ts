import { Garage } from './Garage';
import { Light } from './Light';
import { LightOnCommand } from './LightOnCommand';
import { SimpleRemoteControl } from './SimpleRemoteControl';
import GarageDoorOpenCommand from './GarageDoorOpenCommand';

const remote = new SimpleRemoteControl();
const light = new Light();
const lightOn = new LightOnCommand(light);
remote.setCommand(lightOn);
remote.buttonWasPressed();

const garage = new Garage();
const garageOn = new GarageDoorOpenCommand(garage);
remote.setCommand(garageOn);
remote.buttonWasPressed();