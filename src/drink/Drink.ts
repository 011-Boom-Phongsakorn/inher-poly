export class Drink {
    constructor(protected name: string){
        this.name = name
    }

    public serve(): void {
        console.log(`บริการ ${name}`)
    }
}