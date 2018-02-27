function slove(arr) {
    let clouser = (function () {
        let str = ''
        return {
            append: (s) => str += s,
            removeStart: (n) => str = str.substring(n),
            removeEnd: (n) => str = str.substring(0, str.length - n),
            print: () => console.log(str)
        }
    })()

    for (let obj of arr) {
        let [comm, value] = obj.split(' ')
        clouser[comm](value)
    }
}

