"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aircraft = void 0;
class Aircraft {
    constructor(model, capacity) {
        this.model = model;
        this.capacity = capacity;
        this.model = model;
        this.capacity = capacity;
    }
    fly() {
        console.log(`Aircraft is flying ${this.model}`);
    }
    land() {
        console.log(`Aircraft is landing`);
    }
}
exports.Aircraft = Aircraft;
