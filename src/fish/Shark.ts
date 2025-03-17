import { Fish } from "./Fish";

export class Shark extends Fish {
    swim(): void{
        console.log(`Shark is swimming`)
    }

    bite(animal: string): void{
        const animals = ['แมว', 'ลิง']
        animals.push(animal)
        console.log(`${this.species} Attack ${animals[Math.floor(Math.random() * animals.length)]}`)
    }
}