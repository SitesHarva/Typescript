// type OrderItem = {title: string};

// class Client {
//     constructor(
//         public id: number,
//         public name: string,
//         public surname: string,
//         public email: string,
//         public phone: string,
//         public order: OrderItem[]
//     ) {}
// }


// let clients = [
//     new Client(1, 'vasya', 'kamaz', '234@gmail.com', '0678539399', [{title: 'tv'}, {title: 'pc'}]),
//     new Client(2, 'vasya', 'kamaz', '234@gmail.com', '0678539399', [{title: 'tv'}, {title: 'phone'}, {title: 'pc'}]),
//     new Client(3, 'vasya', 'kamaz', '234@gmail.com', '0678539399', [{title: 'tv'}, {title: 'phone'}, {title: 'pc'}, {title: 'pc'}]),
//     new Client(4, 'vasya', 'kamaz', '234@gmail.com', '0678539399', [{title: 'tv'}]),
//     new Client(5, 'vasya', 'kamaz', '234@gmail.com', '0678539399', [{title: 'tv'}]),
//     new Client(6, 'vasya', 'kamaz', '234@gmail.com', '0678539399', [{title: 'tv'}, {title: 'phone'}]),
//     new Client(7, 'vasya', 'kamaz', '234@gmail.com', '0678539399', [{title: 'tv'}, {title: 'phone'}, {title: 'pc'}]),
//     new Client(8, 'vasya', 'kamaz', '234@gmail.com', '0678539399', [{title: 'tv'}, {title: 'phone'}, {title: 'pc'}]),
//     new Client(9, 'vasya', 'kamaz', '234@gmail.com', '0678539399', [{title: 'tv'}, {title: 'phone'}, {title: 'pc'}]),
//     new Client(10, 'vasya', 'kamaz', '234@gmail.com', '0678539399', [{title: 'tv'}, {title: 'phone'}, {title: 'pc'}, {title: 'pc'}, {title: 'pc'}]),
// ];

// function filterProducts(client1: Client, client2: Client) {
//     return client1.order.length - client2.order.length;
// }
// console.log(clients.sort(filterProducts));