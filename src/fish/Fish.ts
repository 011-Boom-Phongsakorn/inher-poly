export class Fish {
    constructor(protected species: string){
        this.species = species
    }

    public swim(): void {
        console.log(`Fish is swimming`)
    }
}