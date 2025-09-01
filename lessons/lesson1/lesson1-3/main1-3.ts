class User {
    id: number;
    name: string;
    age: number;
    status: boolean;
    greeting?: (str: string) => string;

    constructor(id: number, name: string, age: number, status: boolean) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.status = status;
    }
}

let user: User = new User(1, 'asd', 22, false);

let users: User[] = [
    new User(2, 'asd', 30, true),
    new User(3, 'asd', 11, false)
];

