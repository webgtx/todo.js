let message = document.querySelector('.message');
let btnAdd = document.querySelector('.add');
let todo = document.querySelector('.todo');
let btnDelete

let todoList = [];

if (localStorage.getItem('todo')) {
  todoList = JSON.parse(localStorage.getItem('todo'));
  displayMessage();
}


btnAdd.addEventListener('click', () => {
    let newTodo = {
        info: message.value,
        checked: false,
        important: false
    }
    todoList.push(newTodo);
    displayMessage();
    localStorage.setItem('todo', JSON.stringify(todoList));
})

todo.addEventListener('change', event => {
  let valueLabel = todo.querySelector(`[for='${event.target.getAttribute('id')}']`).innerHTML;
  todoList.forEach(item => {
      if (item == null) {
    	return
    }
    if (item.info === valueLabel) {
      item.checked = !item.checked;
      localStorage.setItem('todo', JSON.stringify(todoList));
    }
  })
})

function displayMessage() {
    let logMessage = "";
    if (todoList.length == 0) {
    	logMessage = '<h1>Nothing there</h1>';
    	todo.innerHTML = logMessage;
    }
    todoList.forEach((item, index) => {
      logMessage += `
          <li class="todo__list" id="${index}">
              <input type="checkbox" id="item_${index}" ${!item.checked ? '' : 'checked'}>
              <label for="item_${index}">${item.info}</label>
              <button id="${index}" class="todo-delete">Delete</button>
          </li>`;
      todo.innerHTML = logMessage;
      
      todoList.length > 0 ? btnDelete = document.querySelectorAll('.todo-delete') : null;
      btnDelete.forEach((item) => {
      	item.addEventListener('click', () => {
      		let idx = item.getAttribute('id');
      		todoList.splice(idx, 1);
      		displayMessage();
      		localStorage.setItem('todo', JSON.stringify(todoList));
      	})
      })
    })
}

