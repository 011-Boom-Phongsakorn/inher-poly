import { Microwave } from "./Microwave";
import { Refrigerator } from "./Refrigerator";

const refrigerator = new Refrigerator()
refrigerator.turnOn()
refrigerator.turnOff()
console.log(`********************************************`)
const microwave = new Microwave(15, 'gu gu gu', 5000)
microwave.turnOn()