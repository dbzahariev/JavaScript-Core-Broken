function prob3(str) {


    let msgTo
    let msgFrom
    ExtractFromTo(str)

    if (msgTo == undefined || msgFrom == undefined) {
        console.log('missing to attribute')
        return
    }
    let isMsg = ExtractMSG(str)
    if (isMsg[1] !== "") {
        console.log('extra characters after closing tag')
        return;
    }
    let msg = isMsg[0];


    let output = '<article>\n'
    output += `  <div>From: <span class="sender">${msgFrom}</span></div>\n`
    output += `  <div>To: <span class="recipient">${msgTo}</span></div>\n`
    output += `  <div>\n`
    for (let i = 0; i < msg.length; i++) {
        output += `    <p>${msg[i]}</p>\n`
    }
    output += `  </div>\n`
    output += `</article>`


    console.log(output);


    function ExtractFromTo(str) {
        function extractFrom(str) {
            let regex = new RegExp('fr om="([A-z]*)"', 'gim')

            if (regex.exec(str) == null) {
                msgFrom = ['Missing', 'from']
            }
            else {
                msgFrom = [regex.exec(str)[1]];
            }
        }

        function extractTo(str) {
            let regex = new RegExp('to="([A-z]*)"', 'gim')

            if (regex.exec(str) == null) {
                msgFrom = ['Missing', 'to']
            }
            else {
                msgFrom = [regex.exec(str)[1]];
            }
        }

        extractFrom(str)
        extractTo(str)

        let regex = new RegExp('(to)="([A-z0-9]+)".*(from)="([A-z0-9]+)"', 'gi')

        let match = regex.exec(str)
        if (match == null) {
            // console.log('missing to attribute')
            return [null, null]
        }
        if (match[1].toLowerCase() == 'to') {
            msgTo = match[2]
        }
        if (match[3].toLowerCase() == 'from') {
            msgFrom = match[4]
        }
        return [msgTo, msgFrom]
    }

    function ExtractMSG(str) {
        let regex = new RegExp('">(.*\\r*\\n*.*)<\\/message>(.*)', 'gim')
        let match = regex.exec(str)

        return [match[1].split('\n'), match[2]];
    }
}
