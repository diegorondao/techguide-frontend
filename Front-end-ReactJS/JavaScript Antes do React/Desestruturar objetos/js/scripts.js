const el = document.getElementById('name');

const user = {
    name: 'Diego',
    age: 30,
    address: {
        street: 'Rua Fidêncio',
        suite: 'Suite 3',
        city: 'Rio de Janeiro',
    }
};

const { address, age } = user;
el.innerText = JSON.stringify({ address, age });

const { address: mudoParaEndereco, age: mudoParaIdade } = user;
el.innerText = JSON.stringify({ endereco, novoNome });

function getName({ name }) {  
    return name;
}  
el.innerText = getName(user);