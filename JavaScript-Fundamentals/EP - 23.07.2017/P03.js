class Task {
    constructor(title, deadline) {
        this.title = title
        this.deadline = deadline
        this.status = 'Open'
    }


    get deadline() {
        return this._deadline
    }

    set deadline(value) {
        if (value < Date.now()) {
            throw new Error('Data cannot be in the past!')
        }

        this._deadline = value
    }

    get isOverdue() {
        return this.deadline < Date.now() && this.status !== 'Complete'
    }

    get rank() {
        if (this.isOverdue) {
            return 0
        } else if (this.status === 'In Progress') {
            return 1;
        } else if (this.status === 'Open') {
            return 2;
        } else {
            return 3;
        }
    }

    static comparator(a, b) {
        let criteria = a.rank - b.rank

        if (criteria === 0) {
            return a.deadline - b.deadline
        }

        return criteria
    }

    get icon() {
        if (this.isOverdue) {
            return `\u26A0`
        } else if (this.status === 'Open') {
            return '\u2731'
        } else if (this.status === 'In Progress') {
            return '\u219D'
        } else if (this.status === 'Complete') {
            return '\u2714'
        }
    }

    toString() {
        if (this.status === 'Complete') {
            return `[${this.icon}] ${this.title}`
        } else if (this.isOverdue) {
            return `[${this.icon}] ${this.title} (overdue)`
        } else {
            return `[${this.icon}] ${this.title} (deadline: ${this.deadline.toString()})`
        }
    }
}

function sol() {
    let date1 = new Date()
    date1.setDate(date1.getDate() + 7)
    let task1 = new Task('JS Homework', date1)
    console.log(task1.toString())
    let task2 = new Task('dksajdkas', Date.now())
    Task.comparator(task1, task2)
}

sol()