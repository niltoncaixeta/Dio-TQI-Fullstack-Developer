/*
function adicionar() {
    var ing = document.getElementById("ingrediente").value;
    var lista  = document.getElementById("lista").innerHTML;
    lista = lista +"<li>"+ing+"</li>";

    document.getElementById("lista").innerHTML = lista;
}
*/

const form = document.getElementById('task-include');
const taskList = document.getElementById('task-list');
let count = 0

form.onsubmit = function (e) {
	e.preventDefault();
	const descriptionTask= document.getElementById('task-input').value;
    if (descriptionTask.trim().length > 0) {
        addTask(descriptionTask);
    }
    form.reset();
};

function addTask(description) {
    const taskNew = document.createElement('input');
	taskNew.setAttribute('type', 'checkbox');
	taskNew.setAttribute('name', description);
	taskNew.setAttribute('id', description);

    const taskDescriptionNode = document.createTextNode(description);

    const labelTask = document.createElement('label');
	labelTask.setAttribute('for', description);
    labelTask.classList.add('label-task');
	labelTask.appendChild(taskDescriptionNode);

    count++;
    let divId = 'taskId' + count.toString().trim();

    const btRemoveTask = document.createElement('button');
    btRemoveTask.innerHTML = "X";
    btRemoveTask.classList.add('bt-remove');
	btRemoveTask.addEventListener("click", function () {
        removeTask("" + divId);
      });


	const taskToInclude = document.createElement('div');
	taskToInclude.setAttribute('id', divId);
	taskToInclude.classList.add('item-list');
	taskToInclude.appendChild(taskNew);
	taskToInclude.appendChild(labelTask);
	taskToInclude.appendChild(btRemoveTask);

	taskList.appendChild(taskToInclude);
}

function removeTask(taskItem) {
    console.log(taskItem)
    var elemento = document.getElementById(taskItem);
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
    if (elemento.parentNode) {
        elemento.parentNode.removeChild(elemento);
    }
}