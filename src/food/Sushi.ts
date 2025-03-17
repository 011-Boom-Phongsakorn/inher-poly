import { Food } from "./Food";

export class Sushi extends Food {
    mole(): void{
        console.log(`${this.name}`)
    }
}