function evenPositions(arr) {
    let result = [];
    for (let i in arr) {
        if (i % 2 == 0) {
            result.push(arr[i]);
        }
    }
    console.log(result.join(' '));
}

evenPositions(['20', '30', '40']);
evenPositions(['5', '10']);