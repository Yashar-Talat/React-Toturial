
function generateElement(tagName,attribute) {
    const element =document.createElement(tagName);
    Object.keys(attribute).forEach(key => {
    element.setAttribute(key,attribute[key]);
    })
    return element;
}



// const container = document.createElement('div');
// container.classList.add('container');

const container = generateElement('div',{class:'container'});

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