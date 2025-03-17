"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Refrigerator = void 0;
var PowerState;
(function (PowerState) {
    PowerState[PowerState["OFF"] = 0] = "OFF";
    PowerState[PowerState["ON"] = 1] = "ON";
})(PowerState || (PowerState = {}));
class Refrigerator {
    constructor() {
        this.state = PowerState.OFF;
        this.plug = false;
    }
    turnOn() {
        if (this.state === PowerState.OFF) {
            console.log(`Refrigerator is now ON`);
            this.state = PowerState.ON;
        }
        return this.state === PowerState.ON;
    }
    turnOff() {
        if (this.state === PowerState.ON) {
            console.log(`Refrigerator is now OFF`);
            this.state = PowerState.OFF;
        }
        return this.state === PowerState.OFF;
    }
}
exports.Refrigerator = Refrigerator;
