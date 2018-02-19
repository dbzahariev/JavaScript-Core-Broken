function round(input) {
    let number = input[0];
    let precision = input[1];

    if (precision > 15) {
        precision = 15;
    }
    let x = number.toFixed(precision);
    console.log(parseFloat(x));

}

round([3.1415926535897932384626433832795, 2]);
round([10.500000000000000000, 3]);