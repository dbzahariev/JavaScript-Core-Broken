function prob2(arr) {
    let number = [];
    for (let i = 0; i < arr.length; i++) {
        if (/[0-9]|-[0-9]/.test(arr[i])) {
            number.push(arr.splice(0, 1)[0])
        }
        else {
            if (number.length < 2) {
                console.log('Error: not enough operands!');
                return;
            }
            let operator = arr.splice(0, 1)[0];

            let n2 = number.pop();
            let n1 = number.pop();
            if (operator == '+') {
                number.push(n1 + n2)
            } else if (operator == '*') {
                number.push(n1 * n2)
            } else if (operator == '-') {
                number.push(n1 - n2)
            } else if (operator == '/') {
                number.push(n1 / n2)
            }
        }
        i = -1;
    }
    if (number.length>1){
        console.log('Error: too many operands!');
        return
    }
    console.log(number[number.length - 1]);
}

prob2([-1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/']
)