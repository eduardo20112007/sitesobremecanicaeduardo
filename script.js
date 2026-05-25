// Selecionando os elementos do DOM
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// Função para adicionar uma nova tarefa
function addTask() {
    const taskText = taskInput.value.trim();

    // Validação: não deixa adicionar se o campo estiver vazio
    if (taskText === '') {
        alert('Por favor, digite uma tarefa!');
        return;
    }

    // Criando o elemento li (item da lista)
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Excluir</button>
    `;

    // Adicionando o evento de deletar no botão que acabou de ser criado
    li.querySelector('.delete-btn').addEventListener('click', function() {
        li.remove();
    });

    // Adiciona a nova tarefa à nossa lista na tela
    taskList.appendChild(li);

    // Limpa o campo de texto e volta o foco para ele
    taskInput.value = '';
    taskInput.focus();
}

// Ouvinte de evento para o botão Adicionar
addBtn.addEventListener('click', addTask);

// Permite adicionar a tarefa também ao apertar a tecla "Enter"
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});