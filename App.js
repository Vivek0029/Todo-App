/*
      const InputBox = document.getElementById("input-box");
      const SubmitButton = document.getElementById("push");
      const TodoTask = document.getElementById("taskarray");
       
      SubmitButton.onclick = function(e) {
        e.preventDefault();
          if(InputBox.value == ''){
              alert("Enter the task");
          }
          else{
              const Todo = InputBox.value;

              const todoMainblock = document.createElement("div")
              todoMainblock.classList.add("container-3")
      
              const TodoTaskContent = document.createElement("input");
              TodoTaskContent.classList.add("todo-element");
              TodoTaskContent.value = Todo;
              TodoTaskContent.type = 'text';
              TodoTaskContent.setAttribute('readonly', 'readonly');
      
              todoMainblock.appendChild(TodoTaskContent);
      
              const DeleteButton = document.createElement('button');
              DeleteButton.classList.add('delete');
              DeleteButton.innerText = 'X';
      
             todoMainblock.appendChild(DeleteButton);
              InputBox.value = '';
              TodoTask.appendChild(todoMainblock);
      
              DeleteButton.addEventListener('click', (e)=>{
                  TodoTask.removeChild(todoMainblock);
              });
          }
      };
*/
const InputBox = document.getElementById("input-box");
const SubmitButton = document.getElementById("push");
const TodoTask = document.getElementById("taskarray");

window.addEventListener('load', (e) => {
    let todos = [];

    if(localStorage.getItem('todos')){
        todos = JSON.parse(localStorage.getItem('todos'));
        renderTodos(todos);
    }

    SubmitButton.onclick = function(e) {
        e.preventDefault();
        if(InputBox.value == ''){
            alert("Enter the task");
        }
        else{
            const Todo = InputBox.value;
            todos.push(Todo);
            localStorage.setItem('todos', JSON.stringify(todos));
            renderTodos(todos);
            InputBox.value = '';
        }
    };
});

function renderTodos(todos){
    TodoTask.innerHTML = '';
    todos.forEach((todo, index) => {
        const todoMainblock = document.createElement("div");
        todoMainblock.classList.add("container-3");
  
        const TodoTaskContent = document.createElement("input");
        TodoTaskContent.classList.add("todo-element");
        TodoTaskContent.value = todo;
        TodoTaskContent.type = 'text';
        TodoTaskContent.setAttribute('readonly', 'readonly');
  
        todoMainblock.appendChild(TodoTaskContent);
  
        const DeleteButton = document.createElement('button');
        DeleteButton.classList.add('delete');
        DeleteButton.innerText = 'X';
  
        todoMainblock.appendChild(DeleteButton);
        TodoTask.appendChild(todoMainblock);
  
        DeleteButton.addEventListener('click', (e) => {
            todos.splice(index, 1);
            localStorage.setItem('todos', JSON.stringify(todos));
            renderTodos(todos);
        });
    });
}
