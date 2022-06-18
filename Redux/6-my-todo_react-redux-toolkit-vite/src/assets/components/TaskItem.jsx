

export default class TaskItem {
    constructor(task, id) {
        this.task = task
        this.id = id
        this.done = false
    }
    
    static lastId = 0

    
}

