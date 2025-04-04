export class Aircraft {
    constructor(protected model: string, protected capacity: number){
        this.model = model
        this.capacity = capacity
    }
    
    fly(): void{
        console.log(`Aircraft is flying ${this.model}`)
    }

    land(): void{
        console.log(`Aircraft is landing`)
    }
}