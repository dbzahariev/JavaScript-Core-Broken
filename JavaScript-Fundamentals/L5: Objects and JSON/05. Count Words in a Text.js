function countWordsInAText([str]) {
    str = str.split(/[\s,.\-']+/);
    str = str.filter(s=>s!=='');
    str = str.filter(s=>s!=='--');
    let input = str;
    let obj = {};
    for (let i = 0; i < input.length; i++) {
        if (obj.hasOwnProperty(input[i]) === false) {
            obj[input[i]] = 1;
        } else {
            obj[input[i]] = obj[input[i]] + 1;
        }
    }
    console.log(JSON.stringify(obj));
}

// countWordsInAText(["Far too slow, you're far too slow."]);
countWordsInAText(["JS devs use Node.js for server-side JS.-- JS for devs"]);