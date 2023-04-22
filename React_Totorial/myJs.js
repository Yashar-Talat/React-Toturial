const container = document.createElement('div');
container.classList.add('container');
const cart = document.createElement('div');
cart.classList.add('cart');
const Name = document.createElement('span');
Name.innerText = "name: YasharTalat";
const age = document.createElement('span');
age.innerText = "age: 20";

cart.appendChild(Name);
cart.appendChild(age);

container.appendChild(cart);
document.body.appendChild(container);