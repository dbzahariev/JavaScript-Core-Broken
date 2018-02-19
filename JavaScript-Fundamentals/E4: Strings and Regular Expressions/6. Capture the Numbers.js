function captureTheNumbers(input) {
    let numbers = [];
    let match, pattern = /\d+/g;
    for (let element of input)
        while (match = pattern.exec(element))
            numbers.push(match[0]);
    console.log(numbers.join(' '));
}

captureTheNumbers(['The300',
    'What is that?',
    'I think it’s the 3rd movie.',
    'Lets watch it at 22:45']);