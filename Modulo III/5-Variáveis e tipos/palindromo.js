function somenteLetrasSemAcentos(str) {
    str = str.replace(/^\s+|\s+$/g, '');    // remover espaco do comeco e do fim
    str = str.toLowerCase();

    // remover acentuacao
    var from = "ãàáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaaeeeeiiiioooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '')   // remover caracteres inválidos
    .replace(/\s+/g, '')                    // Remover espaços
    .replace(/-+/g, '');                    //Remover traços
    return str;
}

// 1a. Solução - Usando split, reverse e join
function verificaPalindromo(string) {
	if (!string || !(typeof string === 'string' || string instanceof String)) return false;
    string = string.trim();
    if (string.length < 1) return false;
    string = somenteLetrasSemAcentos(string);

	return string === string.split('').reverse().join('');
}

// 2a. Solução - Usando for
function verificaPalindromo2(string) {
	if (!string || !(typeof string === 'string' || string instanceof String)) return false;
    string = string.trim();
    if (string.length < 1) return false;
    string = somenteLetrasSemAcentos(string);

    for (var i = 0; i < (string.length / 2); i++) {
		if (string[i] !== string[string.length - 1 - i]) return false;
	}    
	return true;
}

let teste = [
    ["123321"],
    [],
    null,
    undefined,
    '',
    '     ',
    'cat',
    '-123, não é palindromo!',
    '  1-2-3-4-5-5-4-3-2-1  ',
    'A mãe, te ama.',
    'Olé!, maracujá, caju, caramelo.',
    'Luza Rocelina, a namorada do Manuel, leu na moda da romana: "anil é cor azul".',
    'Me vê se a panela da moça é de aço, Madalena Paes, e vem.',
    '0_0. (; /:-:\ ;) .0–0\\'
];

function forEachTeste(element) {
    console.log(verificaPalindromo2(element));
}
teste.forEach(forEachTeste);
