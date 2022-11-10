const el = document.getElementById('name');

// Nullish Coalescing Operator ??
const idade = null;

// 0, '', [], false, undefined, null  => false"

el.innerText = 'sua idade ' + (idade ?? 'Não informado');