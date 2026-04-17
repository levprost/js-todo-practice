//==========================ADD TASKS section=====================
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
    let current = Number(totalCountElement.textContent);
    totalCountElement.textContent = current + 1;
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
    let current = Number(totalCountElement.textContent);
    totalCountElement.textContent = current - 1;
}

function updateTask(todoItem){
    todoItem.classList.add("completed");
    completedListElement.insertAdjacentHTML("afterbegin", todoItem.outerHTML);
    todoItem.remove();
    let current = Number(totalCompletedCountElement.textContent)
    totalCompletedCountElement.textContent = current + 1;
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
    totalCountElement.textContent = 0;
    totalCompletedCountElement.textContent = 0;
});
clearCompletedButtonElement.addEventListener("click", () => {
    completedListElement.replaceChildren();
    totalCompletedCountElement.textContent = 0;
})