"use strict";
// Classes
class User {
    constructor(email, name) {
        this._courseCount = 1;
        this.city = 'Opole';
        this.email = email;
        this.name = name;
    }
    deleteToken() {
        console.log('Token deleated');
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error('Course count should be more than 1');
        }
        this._courseCount = courseNumber;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const emilia = new User('emilia@wp.pl', 'emilia');
// Private & Public
