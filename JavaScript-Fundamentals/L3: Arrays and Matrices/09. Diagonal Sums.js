function diogonalsum(matrix) {
    let normalDiog = 0;
    let beckDiog = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row == col) {
                normalDiog += matrix[row][col];
                beckDiog += matrix[row][matrix.length - 1 - row];
            }
        }
    }
    console.log(normalDiog + ' ' + beckDiog);
}

diogonalsum([
    [1, 2, 3],
    [4, 2, 6],
    [7, 9, 9]
]);