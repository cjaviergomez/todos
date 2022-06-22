export class TodoList {
    constructor() {
        this.todos = [];
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
    }

    eliminarTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    marcarCompletado(id) {
        this.todos.forEach(todo => {
            if (todo.id == id) {
                todo.complete = !todo.complete;
            }
        });
    }

    eliminarCompletados() {
        this.todos = this.todos.filter(todo => !todo.complete);
    }
}