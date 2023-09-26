"use strict";
class User {
    constructor(email, name) {
        this.city = 'Seoul';
        this.email = email;
        this.name = name;
    }
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
}
const user = new User('h', 'h');
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCity(city) {
        this.city = city;
    }
}
