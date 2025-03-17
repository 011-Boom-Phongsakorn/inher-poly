"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coffee = void 0;
const Drink_1 = require("./Drink");
class Coffee extends Drink_1.Drink {
    addMike() {
        console.log(`${this.name} Added Milk`);
    }
}
exports.Coffee = Coffee;
