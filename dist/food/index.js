"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pizza_1 = require("./Pizza");
const Sushi_1 = require("./Sushi");
const pizza = new Pizza_1.Pizza('Smoked Salmon');
pizza.addTopping('Salmon');
const sushi = new Sushi_1.Sushi('');
sushi.mole();
