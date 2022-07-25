import { TodoList } from './classes';
import { createToDoHtml } from './js/componentes';

import './styles.css';

export const todoList = new TodoList();
todoList.todos.forEach( createToDoHtml );

todoList.todos[0].printInfo();

console.log(todoList);