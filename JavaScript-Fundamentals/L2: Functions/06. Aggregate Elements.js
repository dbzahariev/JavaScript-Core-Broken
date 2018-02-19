function aggregateElements(arr) {
    aggregate(0, (a, b) => a + b);
    aggregate(0, (a, b) => a + 1 / b);
    aggregate('', (a, b) => a + b);

    function aggregate(initVal, arrow) {
        for (let i = 0; i < arr.length; i++) {
            initVal = arrow(initVal, arr[i])
        }
        console.log(initVal);
    }
}

aggregateElements([1, 2, 3]);