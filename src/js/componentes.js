import { Todo } from "../classes";
import { todoList } from "../index";

// Referencias al HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');

export const createToDoHtml = (todo) => {
    const todoHtml = `
        <li class="${ (todo.complete) ? 'completed' : ''}" data-id="${ todo.id }">
			<div class="view">
				<input class="toggle" type="checkbox" ${ (todo.complete) ? 'checked' : ''}">
				<label>${todo.task}</label>
				<button class="destroy"></button>
			</div>
		<input class="edit" value="Create a TodoMVC template">
	    </li>
    `;

    const div = document.createElement('div');
    div.innerHTML = todoHtml;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;
}

// Events
txtInput.addEventListener('keyup', (event)=> {
    console.log({event});
    if(event.keyCode === 13 && txtInput.value.length > 0){
       const nuevoTodo = new Todo(txtInput.value);
       todoList.newTodo(nuevoTodo); 
       createToDoHtml(nuevoTodo);
       txtInput.value = '';
    }
});

divTodoList.addEventListener('click', (event) => {
    const elementName = event.target.localName;
    const todoElement = event.target.parentElement.parentElement;
    const todoId = todoElement.getAttribute('data-id');

    if(elementName.includes('input')){
        todoList.checkCompleted(todoId);
        todoElement.classList.toggle('completed');
    }


});