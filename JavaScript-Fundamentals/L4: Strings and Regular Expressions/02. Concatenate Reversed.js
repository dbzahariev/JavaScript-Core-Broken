function concatenateReversed(input) {
    input = input.join('');
    console.log(Array.from(input).reverse().join(''));
}

concatenateReversed(['I', 'am', 'student']);