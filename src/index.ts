// Classes
class User {
    public email: string
    name: string
    private readonly city: string = 'Opole'
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}

const emilia = new User('emilia@wp.pl', 'emilia');
emilia.city

// Private & Public
