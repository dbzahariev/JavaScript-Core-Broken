function resultMy() {
    let strings = [];
    let numbers = [];
    let functions = [];
    for (let i = 0; i < arguments.length; i++) {
        let element = arguments[i]
        if ((typeof element) == 'string') {
            strings.push(element)
        } else if ((typeof element) == 'number') {
            numbers.push(element)
        } else if ((typeof element) == 'function') {
            functions.push(element)
        } else if (typeof element == 'object') {
            for (let obj of Object.keys(element)) {
                if (typeof element[obj] == 'string')
                    strings.push(element[obj])
                if (typeof element[obj] == 'number')
                    numbers.push(element[obj])
                if (typeof element[obj] == 'function')
                    functions.push(element[obj])
            }
            console.log(typeof element)
        }
        else {
            console.log(typeof element)
        }
    }
    for (let obj of strings) {
        console.log('string: ' + obj)
    }
    for (let obj of numbers) {
        console.log('number: ' + obj)
    }
    for (let obj of functions) {
        console.log('function: ' + obj)
    }
    if (strings.length > 0)
        console.log('string = ' + strings.length)
    if (numbers.length > 0)
        console.log('number = ' + numbers.length)
    if (functions.length > 0)
        console.log('function = ' + functions.length)
}

function result() {
    let summary = {}
    for (let i = 0; i < arguments.length; i++) {
        let element = arguments[i]
        let type = typeof element
        if (!summary[type]) {
            summary[type] = 1
        }
        else {
            summary[type]++
        }
        console.log(type + ': ' + element)
    }
    let sortedType = [];
    for (let curttype in summary) {
        sortedType.push([curttype, summary[curttype]])
    }
    sortedType.sort(function (a, b) {
        return a[1] - b[1]
    })

    for (let i = 0; i < sortedType.length; i++) {
        let element2 = sortedType[i]
        console.log(element2[0] + ' = ' + element2[1])
    }
}

// result('cat', 42, function () { console.log('Hello world!'); });
result({name: 'bob'}, 3.333, 9.999);