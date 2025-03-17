"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shark = void 0;
const Fish_1 = require("./Fish");
class Shark extends Fish_1.Fish {
    swim() {
        console.log(`Shark is swimming`);
    }
    bite(animal) {
        const animals = ['แมว', 'ลิง'];
        animals.push(animal);
        console.log(`${this.species} Attack ${animals[Math.floor(Math.random() * animals.length)]}`);
    }
}
exports.Shark = Shark;
