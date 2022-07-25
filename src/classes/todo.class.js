export class Todo {

    static fromJSON({task, id, complete, createAt}) {
        const todo = new Todo(task);
        todo.id = id;
        todo.complete = complete;
        todo.createAt = createAt;

        return todo;
    }

    constructor(task) {
       this.task = task;
       this.id =  new Date().getTime();
       this.complete = false;
       this.createAt = new Date();
    }
}