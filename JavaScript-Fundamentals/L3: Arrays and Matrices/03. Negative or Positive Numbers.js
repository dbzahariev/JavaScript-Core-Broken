function negativePositiveNumbers(arr) {
    let result = [];
    for (num of arr) {
        num < 0 ? result.unshift(num) : result.push(num);
    }
    console.log(result.join('\n'));
}
negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);