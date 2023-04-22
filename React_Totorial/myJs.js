const container = document.createElement('div');
container.classList.add('container');

function generateCart(name, age) {
    const cart = document.createElement('div');
    cart.classList.add('cart');
    const Name = document.createElement('span');
    Name.innerText = `name :${name}`;
    const Age = document.createElement('span');
    Age.innerText = `age : ${age}`;
    cart.appendChild(Name);
    cart.appendChild(Age);
    return cart;
}

const userData = [{
    name: "YasharTalat",
    age: 20
},
{
    name: "Amin",
    age: 22
},
{
    name: "Amir",
    age: 8
}
];

userData.forEach(data => {
    container.appendChild(generateCart(data.name, data.age));
});

document.body.appendChild(container);