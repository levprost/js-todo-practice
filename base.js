const tasksSectionElement = document.querySelector('#taskSection')
const inputTasksElement = document.querySelector("#taskInput");
const addTasksButtonElement = document.querySelector('#addBtn')
const errorMessageElement = document.querySelector('#errorMessage')
const tasksListElement = document.querySelector('#taskList')
const totalCountElement = document.querySelector('#totalCount')
const totalCompletedCountElement = document.querySelector("#completedCount");
const completedListElement = document.querySelector('#completedList')
const clearAllButtonElement = document.querySelector('#clearAll')
const clearCompletedButtonElement = document.querySelector('#clearCompleted')


//==========================Count tasks function======================
let countTasks
let countCompletedTasks;

function updateCount(){
    countTasks = tasksListElement.querySelectorAll('li').length
    countCompletedTasks = completedListElement.querySelectorAll('li').length
    totalCountElement.textContent = Number(countCompletedTasks + countTasks)
    totalCompletedCountElement.textContent = Number(countCompletedTasks)
}

//==========================ADD TASKS section=====================
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
    updateCount();
}

addTasksButtonElement.addEventListener('click', () => {
    if(inputTasksElement.value){
        addTask()
    }else{
        errorMessageElement.innerText = "Error message minimut 1 characters";
    }
})

//=========================DELETE TASKS AND COMPLETE section=========================

function removeTask(todoItem){
    todoItem.remove();
    updateCount();
}

function updateTask(todoItem){
    todoItem.classList.add("completed");
    completedListElement.insertAdjacentHTML("afterbegin", todoItem.outerHTML);
    todoItem.remove();
    updateCount();
}

tasksSectionElement.addEventListener('click',(event) => {
    const button = event.target
    const todoItem = button.closest(".todo__item");
    if (button.closest(".todo__btn--delete")) {
      removeTask(todoItem)
    }
    if (button.closest(".todo__btn--update")) {
      updateTask(todoItem)

    }
})

//========================Clear all and Clear completed Tasks========================

clearAllButtonElement.addEventListener("click", () => {
    tasksListElement.replaceChildren();
    completedListElement.replaceChildren()
    updateCount();
});
clearCompletedButtonElement.addEventListener("click", () => {
    completedListElement.replaceChildren();
    updateCount();
})