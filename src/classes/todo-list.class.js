export class TodoList {
    constructor() {
        this.todos = [];
    }

    newTodo(todo) {
        this.todos.push(todo);
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id);
    }

    checkCompleted(id) {
        this.todos.forEach(todo => {
            if (todo.id == id) {
                todo.complete = !todo.complete;
            }
        });
    }

    deleteCompleted() {
        this.todos = this.todos.filter(todo => !todo.complete);
    }
}