const el = document.getElementById('name');

const user = {
    name: 'Diego',
    age: 30,
    address: {
        street: 'Rua Fidêncio',
        suite: 'Suite 3',
        city: 'Rio de Janeiro',
        zip: {
            code: '111224312344',
            city: 'RJ',
        },
        // showFullAddress(){
        //     return 'Diego Rondão';
        // },
    },
};  

//el.innerText = JSON.stringify(user.name); // Rua Fidêncio

// Exibir o código postal
// Jeito errado de fazer teste de existencia para address e zip
// return Undefined método

// el.innerText = user.address.zip 
//     ? user.address
//         ? user.address.zip.code 
//         : 'Não informado'
//     : 'Não informado'

// Utilizando Optional Chaining
//el.innerText = user.address?.zip?.code ?? 'Não informado';

// function
// el.innerText = user.address?.showFullAddress?.() ?? 'Não informado';

// tratando como array e buscando por chave
// const key =  'code';
// el.innerText = user.address.zip[key] ?? 'Não informado';

