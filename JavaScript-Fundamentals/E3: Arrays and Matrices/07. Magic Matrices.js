function magicMatrices2(input) {
    let matrix = input.map(row => row.join(' ').split(" ").map(Number));

    let sum = matrix[0].reduce((a, b) => a + b);
    let isMagic = true;

    for (let i = 1; i < matrix.length; i++) {
        if (sum !== matrix[i].reduce((a, b) => a + b)) {
            isMagic = false;
        }
    }

    for (let col = 0; col < matrix[0].length; col++) {
        let sumCol = 0;
        for (let row = 0; row < matrix.length; row++) {
            sumCol += matrix[row][col];
        }

        if (sumCol !== sum) {
            isMagic = false;
        }
    }

    console.log(isMagic);
}

// console.log(magic_Matrix(['4 5 6', '6 5 4', '5 5 5']));
// console.log(magic_Matrix(['4 5 6', '6 5 4', '5 5 5']));
//console.log(magic_Matrix(['11 32 45', '21 0 1', '21 1 1']));
// console.log(magic_Matrix(['1 0 0', '0 0 1', '0 1 0']));

magicMatrices2([['4 5 6'], ['6 5 4'], ['5 5 5']]);