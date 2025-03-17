import { Guitar } from "./Guitar";
import { Instrument } from "./Instrument";
import { Piano } from "./Piano";

// const instrument = new Instrument('dump')

const guitar = new Guitar('guitar')
guitar.adjustTremoloBar()

const piano = new Piano('Piano')
piano.pressButton('AB')