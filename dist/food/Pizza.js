"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
const Food_1 = require("./Food");
class Pizza extends Food_1.Food {
    addTopping(topping) {
        console.log(topping);
    }
}
exports.Pizza = Pizza;
