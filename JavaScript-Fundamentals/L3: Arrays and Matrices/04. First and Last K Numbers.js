function firstAndLastKNumbers(input) {
    let count = input.splice(0, 1);
    console.log(input.slice(0, count));
    console.log(input.slice(input.length - count, input.length));
}

firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);