import { Instrument } from "./Instrument";

export class Piano extends Instrument {
    pressButton(note: string): void {
        console.log(`${note}`)
    }
}