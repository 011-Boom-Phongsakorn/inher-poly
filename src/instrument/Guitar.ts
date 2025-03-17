import { Instrument } from "./Instrument";

export class Guitar extends Instrument {
    adjustTremoloBar(): void {
        console.log(`Change the pitch of notes`)
    }
}