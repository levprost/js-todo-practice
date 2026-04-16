//==========================ADD TASKS section=====================
const inputTasksElement = document.querySelector("#taskInput");
const addTasksButtonElement = document.querySelector('#addBtn')
const errorMessageElement = document.querySelector('#errorMessage')
const tasksListElement = document.querySelector('#taskList')
let newTask
let markupDeleteIcon
let markupUpdateIcon
const deleteButtonElement = document.querySelector('#deleteBtn')

function addTask(){
    markupDeleteIcon =
      '<button id="deleteBtn" class="todo__btn todo__btn--delete"><i class="fa-solid fa-trash-can"></i></button>';
    markupUpdateIcon =
      '<button id="updateBtn" class="todo__btn todo__btn--update""><i class="fa-solid fa-circle-check"></i></button>';
    newTask = `
        <li class="todo__item">
        <span class="todo__text">${inputTasksElement.value}</span>
        <div class="todo__actions">
            ${markupUpdateIcon}
            ${markupDeleteIcon}
        </div>
        </li>`;
    tasksListElement.insertAdjacentHTML("afterbegin", newTask);
}

addTasksButtonElement.addEventListener('click', () => {
    if(inputTasksElement.value){
        addTask()
    }else{
        errorMessageElement.innerText = "Error message minimut 1 characters";
    }
})

//=========================SET TASKS section=========================


