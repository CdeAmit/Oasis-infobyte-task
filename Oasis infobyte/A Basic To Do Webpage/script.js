function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskList = document.getElementById("task-list");

    if (taskInput.value !== "") {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(taskInput.value));
        taskList.appendChild(li);
        taskInput.value = "";
    }
}
