"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guitar = void 0;
const Instrument_1 = require("./Instrument");
class Guitar extends Instrument_1.Instrument {
    adjustTremoloBar() {
        console.log(`Change the pitch of notes`);
    }
}
exports.Guitar = Guitar;
