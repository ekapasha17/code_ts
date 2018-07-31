const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

function showHello(divName) {
    const elt = document.getElementById(divName);
    elt.innerText = element;
}
showHello("test_x");