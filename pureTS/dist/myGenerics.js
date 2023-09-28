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
