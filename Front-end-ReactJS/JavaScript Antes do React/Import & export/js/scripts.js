import {soma, divisao, subtracao } from '../lib/math.js'

const el = document.getElementById('name');

el.innerText = soma(1, 2);
el.innerText = divisao(10, 2);
el.innerText = subtracao(10, 2);