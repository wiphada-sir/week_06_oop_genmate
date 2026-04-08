class Shop {
  constructor(shopName) {
    this.shopName = shopName;
    this.drinks = [];
  }

  addDrink(drinkName) {
    this.drinks.push(drinkName);
    console.log(`${drinkName.name} add to ${this.shopName}.`);
  }

  showMenu() {
    console.log(`\n-----Welcome to ${this.shopName}-----\n`);
    console.log(`Let's select your drink!\n`);

    this.drinks.forEach((drinkType) => {
      if (drinkType.type === "Soft drink") {
        drinkType.details = drinkType.sugar;
      }
      if (drinkType.type === "Beer") {
        drinkType.details = drinkType.degree;
      }
      if (drinkType.type === "Juice") {
        drinkType.details = drinkType.madefrom;
      }
      if (drinkType.type === "Tea") {
        drinkType.details = drinkType.fromCountry;
      }
      if (drinkType.type === "Coffee") {
        drinkType.details = drinkType.bean;
      }

      console.log(
        `Drink menu: ${drinkType.name} | Type: ${drinkType.type}-${drinkType.details}`,
      );
      console.log(`Price: ${drinkType.price}THB`);
      console.log(`Available: ${drinkType.drinkStatus()}`);
      console.log(`-----------------------------\n`);
    });
  }
}

module.exports = Shop;
