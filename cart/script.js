// script.js

// This script is included in the HTML file but separated for clarity

// Define Alpine.js data and methods
let app = Alpine.data('pizzaCart', {
    pizzas: [
        { id: 1, name: 'Cheese Pizza', size: 'Small', price: 10 },
        { id: 2, name: 'Pepperoni Pizza', size: 'Medium', price: 12 },
        { id: 3, name: 'Vegetarian Pizza', size: 'Large', price: 15 }
    ],
    cart: [],
    addToCart(pizza) {
        let existingItem = this.cart.find(item => item.id === pizza.id && item.size === pizza.size);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            this.cart.push({ ...pizza, quantity: 1 });
        }
    },
    removeFromCart(index) {
        this.cart.splice(index, 1);
    },
    checkout() {
        let totalCost = this.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        let paymentAmount = prompt(`Total cost is $${totalCost}. Please enter your payment amount:`);
        
        if (paymentAmount >= totalCost) {
            alert("Enjoy your pizzas!");
            this.cart = [];
        } else {
            alert("Sorry - that is not enough money!");
        }
    }
});


const products = [
    { id: 1, name: "Vanilla Cupcakes (6 Pack)", price: 12.99, category: "Cupcake" },
    { id: 2, name: "French Macaron", price: 3.99, category: "Macaron" },
    { id: 3, name: "Pumpkin Cupcake", price: 3.99, category: "Cupcake" },
    { id: 4, name: "Chocolate Cupcake", price: 5.99, category: "Cupcake" },
    { id: 5, name: "Chocolate Pretzels (4 Pack)", price: 10.99, category: "Pretzel" },
    { id: 6, name: "Strawberry Ice Cream", price: 2.99, category: "Ice Cream" },
    { id: 7, name: "Chocolate Macarons (4 Pack)", price: 9.99, category: "Macaron" },
    { id: 8, name: "Strawberry Pretzel", price: 4.99, category: "Pretzel" },
    { id: 9, name: "Butter Pecan Ice Cream", price: 2.99, category: "Ice Cream" },
    { id: 10, name: "Rocky Road Ice Cream", price: 2.99, category: "Ice Cream" },
    { id: 11, name: "Vanilla Macarons (5 Pack)", price: 11.99, category: "Macaron" },
    { id: 12, name: "Lemon Cupcakes (4 Pack)", price: 12.99, category: "Cupcake" }
  ];
  
  // Using forEach method with arrow syntax to create an empty callback function
  products.forEach(product => {
    // Arrow function body (empty for now)
  });
  

  