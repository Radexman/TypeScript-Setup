// Classes
class User {
    protected _courseCount = 1
    email: string
    name: string
    readonly city: string = 'Opole'
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
    private deleteToken() {
        console.log('Token deleated');
        
    }

    get getAppleEmail(): string{
        return `apple${this.email}`;
    }

    get courseCount(): number {
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
    isFamily: boolean = true;
    changeCourseCount() {
        this._courseCount = 4;
    }
}

const emilia = new User('emilia@wp.pl', 'emilia');

// Private & Public
