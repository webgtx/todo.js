let message = document.querySelector('.message');
let btnAdd = document.querySelector('.add');
let todo = document.querySelector('.todo');

let todoList = [];

btnAdd.addEventListener('click', () => {
    let newTodo = {
        info: message.value,
        checked: false,
        important: false
    }
    todoList.push(newTodo);
    displayMessage();
})

function displayMessage() {
    let dislpayMessage = ""
    todoList.forEach((item, index) => {
        dislpayMessage += `
            <li>
                <input type="checkbox" id="item_${index}">
                <label for="item_${index}">${item.info}</label>
            </li>`;
        todo.innerHTML = dislpayMessage;
    })
}

