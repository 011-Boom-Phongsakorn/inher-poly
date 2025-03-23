"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Airplane = void 0;
const Aircraft_1 = require("./Aircraft");
class Airplane extends Aircraft_1.Aircraft {
    constructor(model, capacity) {
        super(model, capacity);
    }
    fly() {
        console.log(`Airplane is flying ${this.model}`);
    }
}
exports.Airplane = Airplane;
