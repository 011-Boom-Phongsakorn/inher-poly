"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microwave = void 0;
class Microwave {
    constructor(temp, sound, time) {
        this.temp = temp;
        this.sound = sound;
        this.time = time;
        this.temp = temp;
        this.sound = sound;
        this.time = time;
    }
    turnOn() {
        console.log(`Temp: ${this.temp} Time: ${((this.time / 60) / 60).toFixed(2)} hr`);
        setTimeout(() => {
            console.log(`${this.sound}`);
        }, this.time);
    }
    turnOff() {
    }
}
exports.Microwave = Microwave;
