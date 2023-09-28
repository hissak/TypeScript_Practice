"use strict";
const score = [1, 2, 3, 4, 5];
const names = ["a", "b", "c", "d", "e"];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
} // Type can be shortened to T
identityThree(123);
identityThree({ brand: "Coke", id: 123 });
function getSearchProducts(products) {
    return products[0];
}
const getMoreSearchProducts = (products) => {
    return products[0];
}; //comma added after T to indicate that T is a generic type
function anotherFunction(val1, val2) {
    return {
        val1,
        val2
    };
}
anotherFunction(123, { connection: "localhost", username: "root", password: "1234" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(item) {
        this.cart.push(item);
    }
}
