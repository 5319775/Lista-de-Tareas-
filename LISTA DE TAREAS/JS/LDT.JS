document.addEventListener("DOMContentLoaded", function() {
    const taskForm = document.getElementById("taskForm");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    taskForm.addEventListener("submit", function(event) {
        event.preventDefault();
        addTask();
    });

    function addTask() {
        if (taskInput.value.trim() !== "") {
            const li = document.createElement("li");
            li.textContent = taskInput.value;
            li.addEventListener("click", toggleTask);
            li.addEventListener("contextmenu", deleteTask); // Agrega evento para eliminar al hacer clic derecho
            taskList.appendChild(li);
            taskInput.value = "";
        } else {
            alert("Por favor, ingresa una tarea válida.");
        }
    }

    function toggleTask() {
        this.classList.toggle("completed");
    }

    function deleteTask(event) {
        event.preventDefault();
        this.remove();
    }
});
