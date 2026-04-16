//==========================ADD TASKS section=====================
const inputTasksElement = document.querySelector("#taskInput");
const addTasksButtonElement = document.querySelector('#addBtn')
const errorMessageElement = document.querySelector('#errorMessage')
let newTask = ''

addTasksButtonElement.addEventListener('click', () => {
    if(inputTasksElement.value){
        newTask = inputTasksElement.value
    }else{
        errorMessageElement.innerText = "Error message minimut 1 characters";
    }
})

