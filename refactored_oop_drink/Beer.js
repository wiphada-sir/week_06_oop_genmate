// Beer

class Beer extends Drink {
    constructor(name, type, degree) {
        super(name, type);
        this.degree = degree;
        console.log(`${this.name} degree ${this.degree}`);
    }
}

module.exports = Beer;