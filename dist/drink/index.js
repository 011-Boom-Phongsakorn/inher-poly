"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Coffee_1 = require("./Coffee");
const Juice_1 = require("./Juice ");
const coffee = new Coffee_1.Coffee('Latte');
coffee.addMike();
const juice = new Juice_1.Juice('Orange Juice');
juice.serve();
juice.addIce();
