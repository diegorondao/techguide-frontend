const el = document.getElementById('name');

const primeiroNome = 'Diego';

// forma errada 
const message = 'Olá! ' + primeiroNome;
el.innerText = message;

// template strings || Interpolation
const text = `Olá! ${primeiroNome} com template Literal`;
el.innerText = text;

