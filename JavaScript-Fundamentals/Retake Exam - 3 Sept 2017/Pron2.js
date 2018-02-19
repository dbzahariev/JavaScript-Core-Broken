function slove(m1, m2, m3, m4) {
    let curRow = m4[0]
    let curCol = m4[1]

    for (let coordinate of m3) {
        modifyMatrix(coordinate);
    }

    foundWave(m1, m4)

    function foundWave(m1) {
        let steps = 1;
        let predPost = '';
        while (true) {
            if (curRow + 1 < m1.length &&
                m1[curRow + 1][curCol] == 0 &&
                predPost != 'up') {
                predPost = 'down'
                curRow++
            } else if (curCol + 1 < m1[0].length &&
                m1[curRow][curCol + 1] == 0 &&
                predPost != 'left') {
                predPost = 'right'
                curCol++
            } else if (curRow - 1 >= 0 &&
                m1[curRow - 1][curCol] == 0 &&
                predPost != 'down') {
                predPost = 'up'
                curRow--
            } else if (curCol - 1 >= 0 &&
                m1[curRow][curCol - 1] == 0 &&
                predPost != 'right') {
                predPost = 'left'
                curCol--
            } else {
                console.log(steps);
                break;
            }
            steps++;
        }
    }

    defPos(curRow, curCol);

    function defPos(endRow, endCol) {
        let output;
        if (endRow == 0) {
            output = 'Top'
        } else if (endCol == 0) {
            output = 'Left';
        } else if (endRow == m1.length - 1) {
            output = 'Bottom';
        } else if (endCol == m1[0].length - 1) {
            output = 'Right'
        }

        //Dead end [1,2,3,4]
        else if (endRow < m1.length / 2 && endCol >= m1[0].length / 2) {
            output = 'Dead end 1';
        } else if (endRow < m1.length / 2 && endCol < m1[0].length / 2) {
            output = 'Dead end 2';
        } else if (endRow >= m1.length / 2 && endCol < m1[0].length / 2) {
            output = 'Dead end 3';
        } else if (endRow >= m1.length / 2 && endCol >= m1[0].length / 2) {
            output = 'Dead end 4';
        }

        console.log(output);
    }

    function modifyMatrix([targetRow, targetCol]) {
        for (let row = 0; row < m2.length; row++) {
            if (m1[targetRow + row] != undefined) {
                for (let col = 0; col < m2[0].length; col++) {
                    if (m2[row][col] == 1 &&
                        m1[targetRow + row][targetCol + col] != undefined) {
                        m1[targetRow + row][targetCol + col] =
                            m1[targetRow + row][targetCol + col] == 1 ? 0 : 1;
                    }
                }
            }
        }
    }
}

slove(
    [[1, 1, 0, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 1],
        [0, 0, 0, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 1, 1, 1],
        [1, 0, 1, 1, 0, 1, 0, 0]],
    [[0, 1, 1],
        [0, 1, 0],
        [1, 1, 0]],
    [[1, 1],
        [2, 3],
        [5, 3]],
    [0, 2]
);