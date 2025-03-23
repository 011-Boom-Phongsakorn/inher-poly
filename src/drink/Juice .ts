import { Drink } from "./Drink";

export class Juice extends Drink {
  constructor(name: string) {
    super(name);
  }

  public serve(): void {
    console.log(`บริการ ${this.name}`);
  }
  public addIce(): void {
    console.log(`เพิ่มน้ำแข็ง ${this.name}`);
  }
}