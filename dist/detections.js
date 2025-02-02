"use strict";
function detectType(val) {
    if (typeof val === 'string') {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log('Please provide ID');
        return;
    }
    id.toLowerCase();
}
function isAdmin(account) {
    if ('isAdmin' in account) {
        return account.isAdmin;
    }
}
// Instanceof narrowing
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return 'fish food';
    }
    else {
        pet;
        return 'bird food';
    }
}
function getTrueShape(shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2;
    }
    // return shape.side * shape.side;
}
function getArea(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
            break;
        case 'square':
            return shape.side * shape.side;
        default:
            const _defaultForShape = shape;
            return _defaultForShape;
    }
}
