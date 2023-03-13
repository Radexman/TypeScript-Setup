// Classes
class User {
    email: string
    name: string
    readonly city: string = 'Opole'
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}

const emilia = new User('emilia@wp.pl', 'emilia');