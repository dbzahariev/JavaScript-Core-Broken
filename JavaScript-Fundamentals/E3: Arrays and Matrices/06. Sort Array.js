function sortArray(input) {
    let x = input.sort().sort((a, b) => a.length > b.length);
    console.log(x.join('\n'));

}

//sortArray(['alpha', 'beta', 'gamma']);
//sortArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortArray(['test', 'Deny', 'omen', 'Default']);