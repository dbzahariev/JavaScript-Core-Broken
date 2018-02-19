function processOddNumbers(input) {
    let result = [];

    for (let i = 0; i < input.length; i++) {
        if (i%2==1){
            result.push(input[i]);
        }
    }
    result = result.map(el => el *2);
    result = result.reverse();
    console.log(result);
}

processOddNumbers([10, 15, 20, 25]);