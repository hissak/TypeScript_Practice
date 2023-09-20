"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, password, isPaid) {
}
var loginUser = function (email, password, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(2);
getUpper('hello');
signUpUser('John', 'johnappleseed@gmail.com', 'password', true);
loginUser('johnappleseed@gmail.com', 'password');
exports.default = addTwo;
