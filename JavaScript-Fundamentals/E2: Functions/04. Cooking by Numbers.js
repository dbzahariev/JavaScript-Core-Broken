function cookingByNumbers(input) {
    let result = input[0];

    for (let i = 1; i < input.length; i++) {
        let op = input[i];
        if (op === 'chop') {
            result = result / 2;
        } else if (op === 'dice') {
            result = Math.sqrt(result);
        } else if (op === 'spice') {
            result = result + 1;
        } else if (op === 'bake') {
            result = result * 3;
        } else if (op === 'fillet') {
            result = (result - (20 / 100 * result));
        }
        console.log(result);
    }
}

cookingByNumbers([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);