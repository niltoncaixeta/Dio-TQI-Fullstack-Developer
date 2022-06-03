const form = document.getElementById('formNumeros');
const resultado = document.getElementById('resultado');

function comparaNumeros(vlr1, vlr2) {
    let soma = vlr1 + vlr2

    let result = (vlr1 === vlr2) ? '' : 'não ';

    result = `Os números ${vlr1} e ${vlr2} ${result}são iguais.`;

    result += ` Sua soma é ${soma}, que é `;

    result += (soma===10) ? "igual" : (soma>10) ? "maior" : "menor"

    result += ' que 10 e ';

    result += (soma===20) ? "igual" : (soma>20) ? "maior" : "menor"

    result += ' que 20.';

    //console.log(result);
    return result;
}

function isNumber(varToCheck) {
    let xreturn = !Number.isNaN(+varToCheck)
    return xreturn
}

form.onsubmit = function (e) {
	e.preventDefault();
    let valor1 = document.getElementById('numero1');
    valor1.focus();
	valor1 = Number(valor1.value);

	const valor2 = Number(document.getElementById('numero2').value);
    
    if (!isNumber(valor1)) {
        resultado.innerHTML='Valor 1 não é um número ou é inválido!';
        return;
    }
    if (!isNumber(valor2)) {
        resultado.innerHTML='Valor 2 não é um número ou é inválido!';
        return;
    }

    resultado.innerHTML= comparaNumeros(valor1, valor2);
    form.reset();
};
