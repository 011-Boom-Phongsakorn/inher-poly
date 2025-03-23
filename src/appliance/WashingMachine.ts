import { Appliance } from "./Appliance";

export class WashingMachine implements Appliance {
    constructor(private brand: string){
        this.brand = brand
    }

    turnOn(): void {
        console.log(`${this.brand} กำลังเปิด`)
    }

    turnOff(): void {
        console.log(`${this.brand} กำลังปิด`)
    }

    wash(): void {
        console.log(`${this.brand} กำลังล้างอัตโนมัติ`)
    }

    dry(): void {
        console.log(`${this.brand} กำลังแหวกแนว`)
    }
}