const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B'
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B'
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C'
	},
	{
		nome: 'Marta',
		nota: 4,
		turma: '2C'
	}
];

// 1a Solução - Com for e sem destructuring assignment
function alunosAprovados1(alunos, media) {
	let aprovados = [];

	for (let i = 0; i < alunos.length; i++) {
        let foiAprovado = alunos[i].nota >= media;

		if (foiAprovado) {
			aprovados.push(alunos[i].nome);
		}
	}
	return aprovados;
}

// 2a Solução - com destructuring assignment
function alunosAprovados2(alunos, media) {
	let aprovados = [];

	for (let i = 0; i < alunos.length; i++) {
		let { nota, nome } = alunos[i];     //destructuring alunos
		if (nota >= media) {
			aprovados.push(nome);
		}
	}
	return aprovados;
}

// 3a Solução - Com destructuring assignment e forEach
function alunosAprovados3(alunos, media) {
	let aprovados = [];
    function checkAluno(aluno) {
		let { nota, nome } = aluno;     //destructuring aluno
		if (nota >= media) {
            aprovados.push(nome)
        };
    }
    alunos.forEach(checkAluno);
	return aprovados;
}

// 4a Solução - Com destructuring assignment e map
function alunosAprovados4(alunos, media) {
	let aprovados = alunos.map(function(aluno) {
		let { nota, nome } = aluno;     //destructuring aluno
		if (nota >= media) return nome;
	});
	return aprovados;
}

// 5a Solução - Sem destructuring assignment e com flatMap
function alunosAprovados4(alunos, media) {
	let aprovados = alunos.flatMap( 
		(aluno) => (aluno.nota >= media) ? [aluno.nome] : [] 
	)
	return aprovados;
}

console.log(alunosAprovados4(alunos, 5));
