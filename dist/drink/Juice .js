"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Juice = void 0;
const Drink_1 = require("./Drink");
class Juice extends Drink_1.Drink {
    constructor(name) {
        super(name);
    }
    serve() {
        console.log(`บริการ ${this.name}`);
    }
    addIce() {
        console.log(`เพิ่มน้ำแข็ง ${this.name}`);
    }
}
exports.Juice = Juice;
