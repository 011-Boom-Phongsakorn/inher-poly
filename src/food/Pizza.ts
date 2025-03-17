import { Food } from "./Food";

export class Pizza extends Food {
    addTopping(topping: string): void {
        console.log(topping)
    }
}