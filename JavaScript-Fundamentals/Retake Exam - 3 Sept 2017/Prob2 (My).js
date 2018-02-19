function slove(m1, m2, m3, m4) {
    extracted(m1, m2, m3, m4);
    try3(m1, m2, m3, m4)
    countMove(m1, m2, m3, m4);


}

function extracted(m1, m2, m3) {
    let maxLength = m2[0].length - 1;
    for (let k = 0; k < m3.length; k++) {
        let startRow = m3[k][0];
        let startCol = m3[k][1];
        for (let j = 0; j <= maxLength; j++) {
            for (let i = 0; i <= maxLength; i++) {
                let targetRow = j + startRow;
                let targetCol = i + startCol;
                if (((targetRow) >= m1.length)) {
                    continue;
                }
                if (targetCol >= m1[0].length) {
                    continue;
                }


                if (m1[targetRow][targetCol] === 1 && m2[j][i] === 1) {
                    reverse(targetRow, targetCol);
                } else {
                    if (m1[targetRow][targetCol] !== m2[j][i]) {
                        m1[targetRow][targetCol] = 1;
                    } else {
                        // Не Прави Нищо
                    }
                }
            }
        }
    }

    function reverse(j, i) {
        if (m1[j][i] === 1) {
            m1[j][i] = 0;
        } else {
            m1[j][i] = 1
        }
    }
}

function try2(m1, m2, m3, m4) {
    let OBJ = []

    let startRow = m4[0]
    let startCol = m4[1]

    let allMove = [];


    let curRow = 0;
    let curCol = 0;

    let countMove = 0;
    for (let dd = 0; dd < 200; dd++) {
        if (curRow + 1 == m1.length) {
            break;
        }
        if (m1[curRow][curCol] == undefined) {
            curCol = 0;
            curRow++;
        }
        if (m1[curRow][curCol] == undefined) {
            console.log('ddddd')
        }

        if (m1[curRow][curCol] == 0) {
            curCol++;
            continue;
        }
        if (m1[curRow][curCol + 1] == 0) {
            if (isIn(curRow, curCol + 1)) {
                continue;
            }
            console.log('move left');
            OBJ.push([curRow, curCol + 1])
            countMove++;
            curCol++;
            continue;
        }
        if (m1[curRow][curCol - 1] == 0) {
            if (isIn(curRow, curCol - 1)) {
                continue;
            }
            console.log('move right');
            OBJ.push([curRow, curCol - 1])
            countMove++;
            curCol--;
            continue;
        }
        if (m1[curRow + 1][curCol] == 0) {
            console.log('move down');
            OBJ.push([curRow + 1, curCol])
            countMove++;
            curRow++;
            continue;
        }
        if (m1[curRow - 1][curCol] == 0) {
            console.log('move up');
            OBJ.push([curRow - 1, curCol])
            countMove++;
            curRow--;
            continue;
        }
        curCol++;
    }


    function isIn(a, b) {
        let result = false
        for (let ff = 0; ff < OBJ.length; ff++) {
            const element = OBJ[ff];
            if (element[0] == a && element[1] == b) {
                result = true;
                break;
            }
        }
        return result
    }
}

function try1(m1, m2, m3, m4) {
    let startRow = m4[0];
    let startCol = m4[1];


    let curRow = startRow
    let curCol = startCol

    let OBJ = []
    for (let qw = 0; qw < 20; qw++) {
        if (curRow >= m1.length) {
            break;
        }
        let posible = true;
        /*for (let i = 0; i < OBJ.length; i++) {
            const element = OBJ[i];
            let newEl = [curRow, curCol];
            if ((element[0] == newEl[0]) && (element[1]==newEl[1])){
                console.log('Err');

                // posible = false;

            }
            else{
                // console.log('y');
            }
        }
        if (posible == false) {
            curCol++;
            continue;
        }
        */
        if (m1[curRow][curCol + 1] == 0) {
            if (isIn(curRow, curCol + 1) == false) {
                console.log('in');
                continue;
            }
            console.log('Move right');
            curCol = curCol + 1;
        } else if (m1[curRow][curCol - 1] == 0) {
            if (isIn(curRow, curCol - 1) == false) {
                console.log('in');
                continue;
            }
            console.log('Move left');
            curCol = curCol - 1;
        } else if (m1[curRow + 1][curCol] == 0) {
            if (isIn(curRow + 1, curCol) == false) {
                console.log('in');
                continue;
            }
            console.log('Move down');
            curRow = curRow + 1;
        } else if (m1[curRow - 1][curCol] == 0) {
            if (isIn(curRow - 1, curCol) == false) {
                console.log('in');
                continue;
            }
            console.log('Move up');
            curRow = curRow - 1;
        }

        let miniOBJ = [curRow, curCol];
        OBJ.push(miniOBJ);
        console.log(`Right Now = ${curRow}-${curCol}`);
    }

    function isIn(a, b) {
        let result = true
        for (let ff = 0; ff < OBJ.length; ff++) {
            const element = OBJ[ff];
            if (element[0] == a && element[1] == b) {
                result = false;
                break;
            }
        }
        return result
    }
}

function try3(m1, m2, m3, m4) {
    let startRow = m4[0]
    let startCol = m4[0]


    let endRow = m1.length;
    let endCol = m1[0].length;


    let curRow = startRow
    let curCol = startCol


    let comove = 0;
    let poliaritet = '+';

    for (let dd = 0; dd < 1000; dd++) {
        let kk = posibleMove(curRow, curCol);

        if ((m1[curRow][curCol] == 0) && (kk[0] !== 'Move')
        ) {
            // console.log(kk[1]);
            m1[curRow][curCol] = 1;
        }
        [curRow, curCol] = NextCol();
        if (curRow == -1 || curCol == -1) {
            break;
        }


        function NextCol() {
            let result = [-1, -1]

            if (poliaritet == '+') {
                curCol++;
                if (curCol >= m1[0].length) {
                    curCol = 0;
                    curRow++;
                }
                if (curRow >= m1.length) {
                    poliaritet = '-';
                    curRow = m1.length - 1;
                    curCol = m1[0].length
                }
            }
            else if (poliaritet === '-') {
                curCol--;
                if (curCol < 0 && curRow == 0) {
                    curCol = -1;
                }
                if (curCol < 0 && curRow != 0) {
                    curCol = m1[0].length;
                    curRow--;
                }
                if (curRow < 0) {
                    curRow = -1;
                }
            }
            result = [curRow, curCol];
            return result;
        }
    }

    function posibleMove(curRow, curCol) {
        let result = [];
        if ((curCol + 1 < endCol) && (m1[curRow][curCol + 1] == 0)) {
            result = ['Move', 'left']
        } else if (curCol - 1 >= 0 && (m1[curRow][curCol - 1] == 0)) {
            result = ['Move', 'Rigth']
        }
        else if ((curRow + 1 < endRow) && (m1[curRow + 1][curCol] == 0)) {
            result = ['Move', 'Down']
        } else if ((curRow - 1 >= 0) && (m1[curRow - 1][curCol] == 0)) {
            result = ['Move', 'Up']
        }

        return result
    }
}

function countMove(m1, m2, m3, m4) {
    let reees = []
    let res = 0;
    for (let i = 0; i < m1.length; i++) {
        let kk = m1[i];
        for (let j = 0; j < kk.length; j++) {
            if (kk[j] == 0) {
                reees.push([i, j]);
            }
        }
    }
    console.log(reees.join(' ||| '));
    res=0;

    for (let i = 0; i < reees.length; i++) {
        if (i + 1 < reees.length) {
            if (reees[i][0] == reees[i + 1][0])
                res++;
            if (reees[i][1]==reees[i+1][1]){
                res++;
            }
            if (reees[i][0] == reees[i][1]){
                res++;
            }
        }
    }

    console.log(m1);
    // console.log(reees);
    console.log(res);
}

slove([
    [1, 1, 0, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 0, 1, 1, 0, 0, 1],
    [1, 0, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 0, 1, 0, 0]
], [
    [0, 1, 1],
    [0, 1, 0],
    [1, 1, 0]
], [
    [1, 1],
    [2, 3],
    [1, 9],
    [5, 3]
], [0, 2]);