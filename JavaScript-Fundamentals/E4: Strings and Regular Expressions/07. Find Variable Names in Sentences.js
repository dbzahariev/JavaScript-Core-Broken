function findVariableNamesInSentences(str) {
    let match;
    let names = [];
    let pattern = /_(\w+)/g;
    while (match = pattern.exec(str)) {
        names.push(match[1]);
    }
    console.log(names.join(','));
}

findVariableNamesInSentences('The _id and _age variables are both integers.');