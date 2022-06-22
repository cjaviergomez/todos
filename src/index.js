import { Todo, TodoList } from './classes';
import { createToDoHtml } from './js/componentes';
import './styles.css';

export const todoList = new TodoList();

const task = new Todo('Learn JavaScript!!');

todoList.newTodo(task);

console.log({todoList});

createToDoHtml(task);
