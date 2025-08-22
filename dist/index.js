"use strict";
const taskInput = document.getElementById("task-input");
const listContainer = document.getElementById("list-container");
window.onload = readData;
// create task
let data = localStorage.getItem("tasks") ? JSON.parse(localStorage.tasks) : [];
function createTask() {
    const info = {
        taskInput: taskInput.value,
        completed: false
    };
    data.push(info);
    localStorage.setItem("tasks", JSON.stringify(data));
    //clear input
    taskInput.value = "";
    readData();
}
//readDate
function readData() {
    listContainer.textContent = "";
    for (let i = 0; i < data.length; i++) {
        // li
        let li = document.createElement("li");
        li.textContent = data[i].taskInput;
        if (data[i].completed) {
            li.classList.add("checked");
        }
        listContainer.appendChild(li);
        // span
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
}
// delete and checked **
listContainer.addEventListener("click", function (e) {
    let target = e.target;
    if (target.tagName === "LI") {
        let index = Array.from(listContainer.children).indexOf(target);
        data[index].completed = !data[index].completed;
        localStorage.setItem("tasks", JSON.stringify(data));
        readData();
    }
    else if (target.tagName === "SPAN") {
        let index = Array.from(listContainer.children).indexOf(target.parentElement);
        data.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(data));
        readData();
    }
});
