import { Drink } from "./Drink";

export class Coffee extends Drink {
    addMike(): void{
        console.log(`${this.name} Added Milk`)
    }
}