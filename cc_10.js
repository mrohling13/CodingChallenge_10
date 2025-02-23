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

// Test Cases for Task 1

const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails());

prod1.updateStock(3);
console.log(prod1.getDetails());

// Task 2: Creating an Order Class

class Order {
    constructor(orderId, product, quantity) {
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;
        this.totalPrice = product.price * quantity; // Calculates Total Price
        product.updateStock(quantity);
    }

    getOrderDetails() {
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.totalPrice}`;
    }
}

// Test Cases for Task 2
const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails());

console.log(prod1.getDetails());

// Task 3: Creating an Inventory Class

class Inventory {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    listProducts() {
        this.products.forEach(product => console.log(product.getDetails()));
    }
}

// Test Cases for Task 3 

const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts(); 


// Task 4: Implementing Order Management

class InventoryWithOrders extends Inventory {
    constructor() {
        super();
        this.orders = [];
    }

    placeOrder(orderId, product, quantity) {
        if (product.stock >= quantity) {
            const order = new Order(orderId, product, quantity);
            this.orders.push(order);
        } else {
            console.log("Insufficient stock to place the order.");
        }
    }

    listOrders() {
        this.orders.forEach(order => console.log(order.getOrderDetails()));
    }
}

// Test Cases for Task 4


const inventoryWithOrders = new InventoryWithOrders();
inventoryWithOrders.addProduct(prod1);
inventoryWithOrders.placeOrder(601, prod1, 2);
inventoryWithOrders.listOrders();

console.log(prod1.getDetails());


// Task 5: Implementing Product Restocking

class InventoryWithRestocking extends InventoryWithOrders {
    restockProduct(productId, quantity) {
        const product = this.products.find(p => p.id === productId);
        if (product) {
            product.stock += quantity;
        } else {
            console.log("Product not found!");
        }
    }
}


// Test Cases for Task 5 
const inventoryWithRestocking = new InventoryWithRestocking();
inventoryWithRestocking.addProduct(prod1);
inventoryWithRestocking.restockProduct(101, 5);
console.log(prod1.getDetails());