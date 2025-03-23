"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helictopter = void 0;
const Aircraft_1 = require("./Aircraft");
class Helictopter extends Aircraft_1.Aircraft {
    constructor(model, capacity) {
        super(model, capacity);
    }
    dropBomb() {
        console.log(`Helictopter drop bomb`);
    }
}
exports.Helictopter = Helictopter;
