function rotateArray(input) {
    let rotation = Number(input[input.length - 1]);
    let print = input.slice(0, input.length - 1);

    for (let i = 0; i < rotation % print.length; i++) {
        let last = print.pop();
        print.unshift(last);
    }
    console.log(print.join(' '));
}

rotateArray([1, 2, 3, 4, 15]);