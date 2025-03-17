import { Appliance } from "./Appliance";

export class Microwave implements Appliance {
    constructor(private temp: number, private sound: string, private time: number){
        this.temp = temp
        this.sound = sound
        this.time = time
    }

    turnOn(): void {
        console.log(`Temp: ${this.temp} Time: ${((this.time / 60) / 60).toFixed(2)} hr`)
        setTimeout(() => {
            console.log(`${this.sound}`)
        }, this.time)
    }

    turnOff(): void {
    }
}