"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WashingMachine = void 0;
class WashingMachine {
    constructor(brand) {
        this.brand = brand;
        this.brand = brand;
    }
    turnOn() {
        console.log(`${this.brand} กำลังเปิด`);
    }
    turnOff() {
        console.log(`${this.brand} กำลังปิด`);
    }
    wash() {
        console.log(`${this.brand} กำลังล้างอัตโนมัติ`);
    }
    dry() {
        console.log(`${this.brand} กำลังแหวกแนว`);
    }
}
exports.WashingMachine = WashingMachine;
