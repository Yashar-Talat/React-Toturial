const container = document.createElement('div');
container.classList.add('container');

function generateCart(name,age) {
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

container.appendChild(generateCart("YasharTalat",20));
container.appendChild(generateCart("AminTalat",22));
container.appendChild(generateCart("AmirTalat",8));
document.body.appendChild(container);