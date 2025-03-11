document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    // Adiciona evento ao botão de adicionar tarefa
    addTaskBtn.addEventListener("click", addTask);

    // Função para adicionar tarefa
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Digite uma tarefa.");
            return;
        }

        // Criando o elemento da lista (LI)
        const li = document.createElement("li");
        li.textContent = taskText;

        // Criando o container para os botões
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("task-buttons");

        // Criando o botão "Concluído"
        const doneButton = document.createElement("button");
        doneButton.innerHTML = '<span class="material-icons">check_circle</span>';
        doneButton.classList.add("done-btn");
        doneButton.addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        // Criando o botão "Apagar"
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<span class="material-icons">delete</span>';
        deleteButton.classList.add("delete-btn");
        deleteButton.addEventListener("click", () => {
            taskList.removeChild(li);
        });

        // Adiciona os botões ao container e ao item da lista
        buttonContainer.appendChild(doneButton);
        buttonContainer.appendChild(deleteButton);
        li.appendChild(buttonContainer);

        // Adiciona a tarefa à lista principal
        taskList.appendChild(li);

        // Limpa o campo de input
        taskInput.value = "";
    }
});
