"use strict";
const taskInput = document.getElementById("task-input");
const listContainer = document.getElementById("list-container");
//read
// create task
let data = localStorage.getItem("tasks") ? JSON.parse(localStorage.tasks) : [];
function createTask() {
    let info = {
        taskInput: taskInput.value
    };
    data.push(info);
    localStorage.setItem("tasks", JSON.stringify(data));
    //clear input
    taskInput.value = "";
    readData();
}
//readDate
function readData() {
    for (let i = 0; i < data.length; i++) {
        listContainer.innerHTML = `<li>${data.taskInput}</li>`;
    }
}
