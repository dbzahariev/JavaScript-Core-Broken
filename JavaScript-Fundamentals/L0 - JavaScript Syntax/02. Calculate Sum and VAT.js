function sumAndVat(input) {
    let sum = 0;
    for (let i of input) {
        sum += i;
    }
    let vat = sum * 0.20;
    let total = sum + vat;
    console.log(sum);
    console.log(vat);
    console.log(total);
}

sumAndVat([3.12, 5, 18, 19.24, 1953.2262, 0.001564, 1.1445]);