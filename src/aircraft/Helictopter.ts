import { Aircraft } from "./Aircraft";

export class Helictopter extends Aircraft {
    constructor(model: string, capacity: number){
        super(model, capacity)
    }

    
    dropBomb(): void {
        console.log(`Helictopter drop bomb`)
    }
}