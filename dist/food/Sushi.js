"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sushi = void 0;
const Food_1 = require("./Food");
class Sushi extends Food_1.Food {
    mole() {
        console.log(`${this.name} มีสีสันสดใหม่ สดชื่น`);
    }
}
exports.Sushi = Sushi;
