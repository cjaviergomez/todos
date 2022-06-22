import { Todo, TodoList } from './classes';
import { createToDoHtml } from './js/componentes';
import './styles.css';

export const todoList = new TodoList();

const task = new Todo('Learn JavaScript!!');

todoList.nuevoTodo(task);

console.log({todoList});

createToDoHtml(task);
