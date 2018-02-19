function uniqueSequences(arr) {
    let uniqueSeqs = new Map();
    for (let line of arr) {
        let seq = JSON.parse(line).map(Number);
        seq.sort((a, b) => b - a);
        let length = seq.length;
        if (!uniqueSeqs.has(length))
            uniqueSeqs.set(length, new Set());
        uniqueSeqs.get(length).add(`[${seq.join(', ')}]`);
    }
    let lengthKeys = [...uniqueSeqs.keys()].sort((a, b) => a - b);
    for (let len of lengthKeys)
        for (let seq of uniqueSeqs.get(len))
            console.log(seq);
}

uniqueSequences([
    '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]'
]);