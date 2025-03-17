"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Guitar_1 = require("./Guitar");
const Piano_1 = require("./Piano");
// const instrument = new Instrument('dump')
const guitar = new Guitar_1.Guitar('guitar');
guitar.adjustTremoloBar();
const piano = new Piano_1.Piano('Piano');
piano.pressButton('AB');
