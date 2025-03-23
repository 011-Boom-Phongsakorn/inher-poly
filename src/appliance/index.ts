import { Microwave } from "./Microwave";
import { Refrigerator } from "./Refrigerator";
import { WashingMachine } from "./WashingMachine";

const refrigerator = new Refrigerator()
refrigerator.turnOn()
refrigerator.turnOff()
console.log(`********************************************`)
const microwave = new Microwave(15, 'gu gu gu', 5000)
microwave.turnOn()

const washingMachine = new WashingMachine('Samsung')
washingMachine.turnOn()
washingMachine.turnOff()
washingMachine.wash()
washingMachine.dry()


