const Shop = require("./Shop.js");
const Beer = require("./refactored_oop_drink/Beer.js");
const Juice = require("./refactored_oop_drink/Juice.js");
const Coffee = require("./refactored_oop_drink/Coffee.js");
const Softdrink = require("./refactored_oop_drink/Softdrink.js");
const Tea = require("./refactored_oop_drink/Tea.js");

const Genmate5shop = new Shop("Genmate-Five Bar");

const Blackbeer = new Beer("Blackbeer", "Beer", 120, 0, "15%");
const Lagerbeer = new Beer("Lagerbeer", "Beer", 120, 10, "7%");
const Hoegaarden = new Beer("Hoegaarden", "Beer", 120, 13, "9%");
const orangeJuice = new Juice("Orange juice", "Juice", 50, 8, "Oragne");
const Matcha = new Tea("Matcha", "Tea", 50, 2, "Japan");
const Americano = new Coffee("Americano", "Coffee", 60, 25, "Arabica");
const Coke = new Softdrink("Coke", "Soft drink", 30, 55, "Sugar 0%");

Genmate5shop.addDrink(Blackbeer);
Genmate5shop.addDrink(Lagerbeer);
Genmate5shop.addDrink(Hoegaarden);
Genmate5shop.addDrink(orangeJuice);
Genmate5shop.addDrink(Matcha);
Genmate5shop.addDrink(Americano);
Genmate5shop.addDrink(Coke);

Genmate5shop.showMenu();
