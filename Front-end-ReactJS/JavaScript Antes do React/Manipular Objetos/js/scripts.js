const el = document.getElementById('name');

// objeto
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
// el.innerText = ('name' in user);

// retornar todas as keys in user
//el.innerText = JSON.stringify(Object.keys(user));

// retornar todos os values in user
//el.innerText = JSON.stringify(Object.values(user));

/** Desestruturar objeto */

// const { address, age } = user;
// el.innerText = JSON.stringify({ address, age });

// const { address: mudoParaEndereco, age: mudoParaIdade } = user;
// el.innerText = JSON.stringify({ endereco, novoNome });

// function getName({ name }) {  
//     return name;
// }  
// el.innerText = getName(user);

// array de objetos
const users = [
    { name: "Maria", age: 31, sallary: 2000, driverLicense: true },
    { name: "João", age: 18, sallary: 1500, driverLicense: false },
    { name: "Mariana", age: 22, sallary: 4000, driverLicense: true },
    { name: "Pedro", age: 50, sallary: 7200, driverLicense: true },
    { name: "Érica", age: 16, sallary: 0, driverLicense: false },
];

// reverse() inverte os itens de um array. O primeiro elemento do array se torna o último e o último torna-se o primeiro.

    // const reverseUsers = users.reverse();
    // el.innerText = JSON.stringify(reverseUsers);

// find() retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. 

    // const salarioMaisAlto = users.find(user => user.sallary > 5000);
    // el.innerText = JSON.stringify(salarioMaisAlto);

// findIndex() retorna o índice no array do primeiro elemento que satisfizer a função de teste provida.

    // const salarioMaisBaixo = users.findIndex(user => user.sallary > 0 && user.sallary < 2000);
    // users[salarioMaisBaixo].sallary += 200;  
    // el.innerText = JSON.stringify(users);

// map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.    

    // adicionar prop newsletter para todos os usuarios.
    // users.map(user => user.newsletter = false);
    // el.innerText = JSON.stringify(users);

// filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.    
    
    // filtra somente pelo que tem permissão de dirigir
    // const usuariosPilotos = users.filter(user => user.driverLicense);
    // el.innerText = JSON.stringify(usuariosPilotos);

// reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.

    //Soma todos os salarios do array
    // const userSallarySum = users.reduce((acumulador, user) => acumulador += user.sallary, 0)
    // el.innerText = JSON.stringify(userSallarySum);
    
    // 
    
 // forEach() executa uma dada função em cada elemento de um array.

    // let userNames = '';
    // const showUserNames = (users) => {
    //     users.forEach((user) => {
    //         userNames += `Olá ${user.name}! - `;
    //     });
    // };
    // showUserNames(users);
    // el.innerText = userNames;

// some() testa se ao menos um dos elementos no array passa no teste implementado pela função atribuída e retorna um valor true ou false.    
    
    // testa se um salario é igual a zero
    // const semSalario = users.some(user => user.sallary === 0); // true
    // el.innerText = semSalario;

// every() testa se todos os elementos do array passam pelo teste implementado pela função fornecida. 
// Este método retorna um valor booleano.

    // Testa se todos os usuários tem nome
    //const everyUserHasName = users.every(user => user.name); // true
    //el.innerText = everyUserHasName;

    // Testa se todos tem um bom salário
    // const everyUserHasGoodSallary = users.every(user => user.sallary > 2000);
    // el.innerText = everyUserHasGoodSallary;
    



