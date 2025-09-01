class User {

    constructor(public name: string, public age: number, public status: boolean) {
        this.name = name;
        this.age = age;
        this.status = status;
    }
    greeting?: (str: string)=> string
}

let user:User = new User('asd', 22, false);

let users: User[] = [
    
    new User('asd', 223, false)

];