function printAnArrayWithAGivenDelimiter(input) {
    let delimeter = input.splice(input.length - 1);
    console.log(input.join(delimeter));
}

printAnArrayWithAGivenDelimiter(['One', 'Two', 'Three', 'Four', 'Five', '-']);