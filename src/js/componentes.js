import { Todo } from "../classes";
import { todoList } from "../index";

// Referencias al HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnClearCompleted = document.querySelector('.clear-completed');

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
    } else if(elementName.includes('button')){
        todoList.deleteTodo(todoId);
        divTodoList.removeChild(todoElement);
    }
});

btnClearCompleted.addEventListener('click', () => {
    todoList.deleteCompleted();
    for(let i = divTodoList.children.length -1; i >= 0; i--){
        const element = divTodoList.children[i];
        if(element.classList.contains('completed')){
            divTodoList.removeChild(element);
        }
    }
});