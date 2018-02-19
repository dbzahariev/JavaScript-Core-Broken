function equalNeighbors(matrix) {
    let count = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            try {
                if (matrix[row][col] === matrix[row][col + 1]) {
                    count++;
                }
                if (((matrix[row][col] === matrix[row + 1][col]))) {
                    count++;
                }
            } catch (e) {

            }
        }
    }

    console.log(count);
}

function equalNeighbors2(matrix) {
    let counter = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row + 1 < matrix.length) {
                if (matrix[row][col] === matrix[row + 1][col]) {
                    counter++;
                }
            }
            if (col + 1 < matrix.length) {
                if (matrix[row][col] === matrix[row][col + 1]) {
                    counter++;
                }
            }
        }
    }

    console.log(counter);
}


equalNeighbors2([
    ['2', '3', '7', '7', '2'],
    ['4', '0', '5', '4', '1'],
    ['4', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]);

// equalNeighbors([
//     [1, 1, 1, 1]
// ])
equalNeighbors([
    [1, 1],
    [1, 1]
]);