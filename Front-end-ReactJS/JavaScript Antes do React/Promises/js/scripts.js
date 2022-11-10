const el = document.getElementById('name');

// Example deu uma promise
    // const somaDoisNumeros = (a, b) => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             if(b > 5) { // exemplo para erro
    //                 reject(a + b);
    //             }
    //             resolve(a + b);
    //         }, 2000);
    //     });
    // }

    // somaDoisNumeros(1, 3)
    //     .then(soma => {
    //         el.innerText = 'Success ' + soma;
    //     })
    //     .catch(err => {
    //         el.innerText = 'Error: ' + err;
    //     });

// Example request api Async
    // fetch('http://api.github.com/users/diegorondao')
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(body => {
    //         el.innerText = JSON.stringify(body)
    //     })
    //     .catch(err => {
    //         el.innerText = err;
    //     });

// Example Method 
async function buscaDadosUserGithub() {
    try {
        const response = await fetch('http://api.github.com/users/diegorondao');
        const body = await response.json();
        return body;
    } catch (err) {
        return err;
    }
}

buscaDadosUserGithub().then( response => {
    el.innerText = JSON.stringify(response)
})