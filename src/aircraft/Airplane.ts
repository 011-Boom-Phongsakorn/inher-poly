import { Aircraft } from "./Aircraft";

export class Airplane extends Aircraft {
    constructor(model: string, capacity: number){
        super(model, capacity)
    }

    fly(): void{
        console.log(`Airplane is flying ${this.model}`)
    }
}