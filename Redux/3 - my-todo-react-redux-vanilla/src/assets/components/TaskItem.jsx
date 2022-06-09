

export class TaskItem {
    constructor(task) {
        this.task = task
        this.id = TaskItem.lastId++
        this.done = false
    }
    
    static lastId = 0

    
}

