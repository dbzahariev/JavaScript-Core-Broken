function PrintNElement(input) {
    let N = Number(input.splice(input.length - 1));
    for (let i = 0; i < input.length; i += N) {
        console.log(input[i]);
    }
}

// PrintNElement(['dsa', 'asd', 'test', 'tset', '2']);
PrintNElement([5, 20, 31, 4, 20, 2]);
// PrintNElement([1, 2, 3, 4, 5, 6]);
