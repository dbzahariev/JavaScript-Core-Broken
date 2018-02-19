function smallestTwoNumbers(input) {
    input.sort((a, b) => a > b);
    let result = [];

    for (let i = 0; i < input.length; i++) {
        if (result.length >= 2) {
            break;
        }

        if (result.length < 2) {
            const element = input[i];
            let index = input.indexOf(element);
            while (index >= 0) {
                i = -1;
                let newEl = Number(input.splice(index, 1)[0]);
                index = input.indexOf(element);
                let dd = result.indexOf(newEl);
                if (result.indexOf(newEl) === -1) {
                    result.push(newEl);
                }
            }
        }
    }

    console.log(result.join(' '));
}

function smallestTwoNumbers2(input) {
    input.sort((a, b) => a - b);
    let result = input.slice(0, 2);
    console.log(result.join(' '));
}

smallestTwoNumbers2([3, 0, 10, 4, 7, 3]);   