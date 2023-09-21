"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: 'John',
    age: 30,
    email: 'john@john.com',
    password: 'password',
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isActive;
}
createUser(User);
function createCourse() {
    return {
        name: 'React',
        isActive: true,
    };
}
