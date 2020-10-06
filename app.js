// Selectors
const addTodoBtn = document.querySelector('#add-todo');

const todoInput = document.querySelector('#todo-input');

const todoList = document.querySelector('.list-items');

// Event Listners
addTodoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTodo);

// Functions
function addTodo() {

  // Create the container div
  const newTodo = document.createElement('div');
  newTodo.classList.add('todo', 'flex');

  // Create the text
  const newText = document.createElement('li');

  if (todoInput.value == "") {
    todoInput.value = "Please enter some text";//Hack XD
  } else {
    newText.innerText = todoInput.value;
    newTodo.appendChild(newText);
    // Create the done button
    const newBtn = document.createElement('a');
    newBtn.setAttribute("href", "#");
    newBtn.classList.add('del-btn');
    newBtn.innerText = "x";
    newTodo.appendChild(newBtn);

    // Appent to the list
    todoList.appendChild(newTodo);
    todoInput.value = "";
  }

}

// Delete Todo 

function deleteTodo(e) {
  const item = e.target;
  if (item.classList.contains('del-btn')) {
    item.parentElement.remove();
  }
}