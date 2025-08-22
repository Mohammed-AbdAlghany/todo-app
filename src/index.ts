const taskInput = document.getElementById("task-input") as HTMLInputElement
const listContainer = document.getElementById("list-container") as HTMLUListElement

window.onload=readData
interface Task{
    taskInput:string
    completed:boolean
}
// create task
let data:Task[] = localStorage.getItem("tasks")?JSON.parse(localStorage.tasks) as Task[]:[]
function createTask():void {
    const info:Task={
       taskInput:taskInput.value,
       completed:false
    }
    data.push(info)
    localStorage.setItem("tasks",JSON.stringify(data))
    //clear input
    taskInput.value=""
    readData()
}

//readDate
function readData():void {
    listContainer.textContent=""
    for (let i = 0; i < data.length; i++) { 
        // li
        let li = document.createElement("li") as HTMLLIElement
        li.textContent=data[i].taskInput
        if (data[i].completed) {
            li.classList.add("checked")
        } 
        listContainer.appendChild(li) 
        // span
        let span = document.createElement("span") as HTMLSpanElement
        span.innerHTML="\u00d7"
        li.appendChild(span)
       } 
}

// delete and checked **
listContainer.addEventListener("click",function (e:MouseEvent):void {
    let target = e.target as HTMLElement
    if (target.tagName==="LI") {
        let index = Array.from(listContainer.children).indexOf((target as HTMLLIElement))
        data[index].completed=!data[index].completed
        localStorage.setItem("tasks",JSON.stringify(data))
        readData()
    }else if (target.tagName==="SPAN") {
        let index = Array.from(listContainer.children).indexOf((target as HTMLSpanElement).parentElement as HTMLLIElement)
        data.splice(index,1)
        localStorage.setItem("tasks",JSON.stringify(data))
        readData()
    }
    
})