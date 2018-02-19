function prob3(str) {
    let MSG = {From: "", To: "", MSG: "", ERROR: []}

    extractFrom()
    if (checkError() == true) {
        return
    }
    extractTo()
    if (checkError() == true) {
        return
    }
    extractMsg()
    if (checkError() == true) {
        return
    }
    checkAtherClass()
    if (checkError() == true) {
        return
    }
    output()

    function extractFrom() {
        let regex = new RegExp('\\bfrom="([A-z ]*)"', 'gim')

        let match = regex.exec(str);
        if (match == null) {
            MSG.ERROR.push('Missing attributes')
        } else {
            MSG.From = match[1]
        }
    }

    function extractTo() {
        function foundName() {
            let names = [];
            const regex = /\bto="([A-z ]*)"/g;
            let m;

            while ((m = regex.exec(str)) !== null) {
                // This is necessary to avoid infinite loops with zero-width matches
                if (m.index === regex.lastIndex) {
                    regex.lastIndex++;
                }

                // The result can be accessed through the `m`-variable.
                m.forEach((match, groupIndex) => {
                    names.push(`${match}`);
                });
            }
            return names
        }


        let match = foundName();
        if (match == null) {
            MSG.ERROR.push('Missing attributes')
        } else {
            MSG.To = match[1]
        }
    }

    function extractMsg() {
        let regex = new RegExp('>(.*\\r*\\n*.*)<\\/message>(.*)', 'gim')

        let match = regex.exec(str);
        if (match == null) {
            MSG.ERROR.push('Missing attributes')
        } else if (match[2] != "") {
            MSG.ERROR.push('Invalid message format')
        } else {
            MSG.MSG = match[1].split('\n')
        }
    }

    function checkAtherClass() {
        let regex = new RegExp('<.*=".*([#|:]+).*">.*<', 'g');

        let match = regex.exec(str);
        if (match != null) {
            MSG.ERROR.push('Invalid message format')
        }

        regex = new RegExp('<.*.*([#|:]+).*>.*<', 'g');

        match = regex.exec(str);
        if (match != null) {
            MSG.ERROR.push('Invalid message format')
        }
    }

    function checkError() {
        if (MSG.ERROR.length > 0) {
            console.log(MSG.ERROR[MSG.ERROR.length - 1]);
            return true
        }
        return false;
    }

    function output() {
        let output = '<article>\n'
        output += `  <div>From: <span class="sender">${MSG.From}</span></div>\n`
        output += `  <div>To: <span class="recipient">${MSG.To}</span></div>\n`
        output += `  <div>\n`
        let msg = MSG.MSG;
        for (let i = 0; i < msg.length; i++) {
            output += `    <p>${msg[i]}</p>\n`
        }
        output += `  </div>\n`
        output += `</article>`


        console.log(output);
    }
}

// prob3('<message to="Bob" from="Alice" timestamp="1497254092">Hey man, \nwhat\'s up?</message>')
// prob3('<message to="Bob" fr om="Alice" timestamp="1497254092">Hey man, \nwhat\'s up?</message>')
// prob3('<message t o="Bob" fr om="Alice" timestamp="1497254092">Hey man, \nwhat\'s up?</message>')
// prob3('<message t o="Bob" fr om="Alice" timestamp="1497254092">Hey man, \nwhat\'s up?</message>')
// prob3('<message from="John Doe" to="Alice">Not much, just chillin. How about you?</message>')
// prob3('fds<message from="MasterBlaster" to="TheAnimal">FWD: Funny stuff</message>')
// prob3('<message from="Hillary" to="Edward" secret:true>VGhpcyBpcyBhIHRlc3Q</message>')
prob3('<message from="Pedro" to="Zaira" topic="Prxima Centauri discoveries">We have detected a distortion in the light patterns of Proxima Centauri.\n' +
    'It\'s likely this is a new rocky planet of approximately Earth-mass.\n' +
    'This is very exciting news!\n' +
    'Sincerely, Pedro Amado</message>')