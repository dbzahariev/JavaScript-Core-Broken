function composeTag(input) {
    let result = `<img src="${input[0]}" alt="${input[1]}">`;
    console.log(result);
}

composeTag(['smiley.gif', 'Smiley Face']);