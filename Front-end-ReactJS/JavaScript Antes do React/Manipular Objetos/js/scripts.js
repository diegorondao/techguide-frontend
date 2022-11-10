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

// return True/false exist a prop name no objeto user ?
//el.innerText = ('name' in user);

// retornar todas as keys in user
//el.innerText = JSON.stringify(Object.keys(user));

// retornar todos os values in user
//el.innerText = JSON.stringify(Object.values(user));

/*
* Desestruturação do object
*/
const { address, age } = user;
el.innerText = JSON.stringify({ address, age });