//
// 1a Solução - Usando For
function substituiNumerosPares(array) {
	if (!array.length) return -1;

	const naoZero = (num) => num !== 0;
	const numPar = (num) => num % 2 === 0;

	for (let i = 0; i < array.length; i++) {
		if (numPar(array[i]) && naoZero(array[i])) {
			array[i] = 0;
		}
	}
	return array;
}

// 2a Solução - Usando forEach
function substituiNumerosPares2(array) {
    if (Array.isArray(array) && !array.length) return -1;

    function substElements(element, index, array) {
      array[index] = (element !==0 && element % 2 === 0)? 0 : element;
    }
    array.forEach(substElements);
    return array;
}

// 3a Solução - Usando map
function substituiNumerosPares3(array) {
    if (Array.isArray(array) && !array.length) return -1;
    function checkEachElements(element, index) {
        if (element !==0 && element % 2 === 0) return 0;
        return element;
    }
    array = array.map(checkEachElements);
    return array;
}


console.log(substituiNumerosPares2([]));
console.log(substituiNumerosPares2([2, 0, 3, 5]));
console.log(substituiNumerosPares2([2]));
console.log(substituiNumerosPares2([-2, -1, 0, 1, 2, 3, 4, 5]));
