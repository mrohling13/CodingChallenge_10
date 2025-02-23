// Task 1: Creating a Product Class

class Product {
    constructor(name, id, price, stock) {
        this.name = name; 
        this.id = id;
        this.price = price;
        this.stock = stock;
    }

    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: ${this.price}, Stock: ${this.stock}`;
    }

    updateStock(quantity) {
        if (this.stock >= quantity) { // Updating stock
            this.stock -= quantity;
        } else {
            console.log("Insufficient stock!");
        }
    }
}

// Test cases for Task 1

const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails());

prod1.updateStock(3);
console.log(prod1.getDetails());

