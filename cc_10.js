// Task 1: Creating a Product Class

class Product {
    constructor(name, id, price, stock) {
        this.name = name; // product name
        this.id = id; // product id
        this.price = price; // product price
        this.stock = stock; // product stock
    }

    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: ${this.price}, Stock: ${this.stock}`; // deatils for product
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

const prod1 = new Product("Laptop", 101, 1200, 10); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"
console.log(prod1.getDetails());

prod1.updateStock(3);
console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"

// Task 2: Creating an Order Class

class Order {
    constructor(orderId, product, quantity) {
        this.orderId = orderId; // order id
        this.product = product; // product
        this.quantity = quantity; // quantity
        this.totalPrice = product.price * quantity; // Calculates Total Price
        product.updateStock(quantity);
    }

    getOrderDetails() {
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.totalPrice}`;
    }
}

// Test Cases for Task 2
const order1 = new Order(501, prod1, 2); // Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"
console.log(order1.getOrderDetails());

console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5" (Stock reduced)

// Task 3: Creating an Inventory Class

class Inventory {
    constructor() {
        this.products = []; // inputs product
    }

    addProduct(product) {
        this.products.push(product); // add products 
    }

    listProducts() {
        this.products.forEach(product => console.log(product.getDetails()));
    }
}

// Test Cases for Task 3 

const inventory = new Inventory(); // makes new inventory
inventory.addProduct(prod1); // adds the product
inventory.listProducts(); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"


// Task 4: Implementing Order Management

class InventoryWithOrders extends Inventory {
    constructor() {
        super();
        this.orders = []; // inputs orders
    }

    placeOrder(orderId, product, quantity) { // evaluates orders
        if (product.stock >= quantity) {
            const order = new Order(orderId, product, quantity); // creates new order
            this.orders.push(order); // adds order to other orders
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
inventoryWithOrders.addProduct(prod1); // adds a prodcut 
inventoryWithOrders.placeOrder(601, prod1, 2); // Expected output: "Order ID: 601, Product: Laptop, Quantity: 2, Total Price: $2400"
inventoryWithOrders.listOrders();

console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 3"


// Task 5: Implementing Product Restocking

class InventoryWithRestocking extends InventoryWithOrders { // restocks a product
    restockProduct(productId, quantity) {
        const product = this.products.find(p => p.id === productId); 
        if (product) {
            product.stock += quantity; // increasing stock
        } else {
            console.log("Product not found!");
        }
    }
}


// Test Cases for Task 5 
const inventoryWithRestocking = new InventoryWithRestocking();
inventoryWithRestocking.addProduct(prod1); // adds prodcut to inventory
inventoryWithRestocking.restockProduct(101, 5); // logs the updated product
console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 8"