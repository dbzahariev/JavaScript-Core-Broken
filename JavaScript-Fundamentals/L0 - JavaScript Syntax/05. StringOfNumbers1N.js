function stringOfNumbers1N(input) {
    let N = Number(input);
    let str = '';
    for (let i = 1; i <= N; i++) {
        str = str + i;
    }
    console.log(str);
}

stringOfNumbers1N('11');