const taskInput =document.getElementById("task-input") as HTMLInputElement
const listContainer = document.getElementById("list-container") as HTMLUListElement

//read
window.onload=readData

// create task
let data = localStorage.getItem("tasks")?JSON.parse(localStorage.tasks):[]
function createTask() {
    let info={
        taskInput:taskInput.value
    }
    data.push(info)
    localStorage.setItem("tasks",JSON.stringify(data))
    //clear input
    taskInput.value=""
    readData()
}
//readDate
function readData() {
    
    for (let i = 0; i < data.length; i++) { 
        let li =document.createElement("li")
        li.innerHTML=`${data[i].taskInput}`
        listContainer.appendChild(li)
    }
    
}
