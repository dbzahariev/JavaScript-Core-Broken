class MailBox {
    constructor() {
        this.listMess = [];
        this._messageCount = 0;
    }


    addMessage(subject, text) {
        this.listMess.push({subject, text})
        return this
    }


    get messageCount() {
        return this.listMess.length
    }

    deleteAllMessages() {
        this.listMess = []
    }

    findBySubject(substr) {
        return this.listMess.filter(
            m => m.subject.includes(substr));
    }

    toString() {
        if (this.listMess.length === 0) {
            return `* (empty mailbox)`;
        } else {
            let msgStr = this.listMess.map(m =>
                ' * [' + m.subject + '] ' + m.text)
                .join("\n");
            if (this.listMess.length === 0)
                msgStr = ' * (empty mailbox)';
            return msgStr;
        }
    }
}

let mb = new MailBox()
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("meeting", "Let's meet at 17/11");
console.log(mb + '');