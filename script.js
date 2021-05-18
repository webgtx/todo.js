let message = document.querySelector('.message');
let btnAdd = document.querySelector('.add');
let todo = document.querySelector('.todo');

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
    if (item.info === valueLabel) {
      item.checked = !item.checked;
      localStorage.setItem('todo', JSON.stringify(todoList));
    }
  })
})

function displayMessage() {
    let logMessage = ""
    todoList.forEach((item, index) => {
      logMessage += `
          <li class="todo__list" id="${index}">
              <input type="checkbox" id="item_${index}" ${item.checked ? 'checked' : ''}>
              <label for="item_${index}">${item.info}</label>
          </li>`;
      todo.innerHTML = logMessage;
    })
}

