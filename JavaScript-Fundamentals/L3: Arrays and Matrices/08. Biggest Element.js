function biggestElement(input) {
    let maxElement = Math.max();

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            const element = input[i][j];
            if (maxElement < element)
                maxElement = element;
        }
    }
    console.log(maxElement);
}

biggestElement([
    [20, 50, 10],
    [8, 33,  145]
]);