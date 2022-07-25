import { Todo } from './todo.class.js';
export class TodoList {
    constructor() {
       this.loadLocalStorage();
    }

    newTodo(todo) {
        this.todos.push(todo);
        this.saveLocalStorage();
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id);
        this.saveLocalStorage();
    }

    checkCompleted(id) {
        this.todos.forEach(todo => {
            if (todo.id == id) {
                todo.complete = !todo.complete;
                this.saveLocalStorage();
            }
        });
    }

    getTotalPending() {
        return this.todos.filter(todo => !todo.complete).length;
    }

    deleteCompleted() {
        this.todos = this.todos.filter(todo => !todo.complete);
        this.saveLocalStorage();
    }

    saveLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    loadLocalStorage() {
        this.todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
        this.todos = this.todos.map(Todo.fromJSON);
    }
}