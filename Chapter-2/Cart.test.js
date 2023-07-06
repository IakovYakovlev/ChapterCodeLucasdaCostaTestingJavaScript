const assert = require("assert");
const Cart = require("./Cart.js");

const cart = new Cart();
cart.addToCart("cheesecake");
cart.removeFromCart("cheesecake");

assert.deepStrictEqual(cart.items, []);

console.log("The removeFromCart function can remove an item from the cart");
