const form = document.getElementById('formNumeros');
const resultado = document.getElementById('resultado');

function comparaNumeros(vlr1, vlr2) {
    let soma = vlr1 + vlr2
    let result = (vlr1 == vlr2) ? '' : ' não';
    result = 'Os números ' + vlr1 + ' e ' + vlr2 + result + ' são iguais.';
    result += ' Sua soma é ' + soma + ', que é ';
    if (soma == 10) {
        result += 'igual';
    } else if (soma < 10) {
        result += 'menor';
    } else {
        result += 'maior';
    }
    result += ' que 10 e ';
    if (soma == 20) {
        result += 'igual';
    } else if (soma < 20) {
        result += 'menor';
    } else {
        result += 'maior';
    }
    result += ' que 20.';
    //console.log(result);
    return result;
}

form.onsubmit = function (e) {
	e.preventDefault();
    let valor1 = document.getElementById('numero1');
    valor1.focus();
	valor1 = Number(valor1.value);
	const valor2 = Number(document.getElementById('numero2').value);
    if (!valor1) {
        resultado.innerHTML='Valor 1 não é um número ou é inválido!';
        return;
    }
    if (!valor2) {
        resultado.innerHTML='Valor 2 não é um número ou é inválido!';
        return;
    }
    resultado.innerHTML= comparaNumeros(valor1, valor2);
    form.reset();
};
