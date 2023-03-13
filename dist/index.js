"use strict";
// Classes
class User {
    constructor(email, name) {
        this.city = 'Opole';
        this.email = email;
        this.name = name;
    }
}
const emilia = new User('emilia@wp.pl', 'emilia');
emilia.city;
// Private & Public
