function binaryToDecimal(input) {
    input = input.split('').reverse();
    let result = 0;
    for (let i = 0; i < input.length; i++) {
        if (Number(input[i]) === 1) {
            result += 2 ** i;
        }
    }
    console.log(result);
}

binaryToDecimal('00001001');