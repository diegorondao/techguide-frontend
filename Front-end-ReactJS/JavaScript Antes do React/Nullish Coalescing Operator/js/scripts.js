const el = document.getElementById('name');

// Nullish Coalescing Operator ??
// 0, '', [], false, undefined, null  => false"

const idade = null;

el.innerText = 'sua idade ' + (idade ?? 'Não informados');