function countWordsWithMaps([str]) {
    str = str.split(/[\s,.\-']+/);
    str = str.filter(s => s !== '');
    str = str.filter(s => s !== '--');
    let input = str;

    let myMap = new Map();
    for (let i = 0; i < input.length; i++) {
        let word = input[i].toLowerCase();

        if (myMap.has(word) === false) {
            myMap.set(word, 1);
        } else {
            myMap.set(word, (myMap.get(word) + 1));
        }
    }

    let sortedKeys = Array.from(myMap.keys()).sort((a,b)=>a.localeCompare(b));
    for (let key of sortedKeys) {
        console.log('\'' + key + '\'' + ' -> ' + myMap.get(key) + ' times')
    }
}

countWordsWithMaps(["Far too slow, you're far too slow."]);