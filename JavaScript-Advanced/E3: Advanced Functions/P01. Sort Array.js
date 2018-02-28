function solve(arr, rot) {
    function ascArrSort(a, b) {
        return a - b
    }

    function descArrSort(a, b) {
        return b - a
    }

    let sortOptin = {
        'asc': ascArrSort,
        'desc': descArrSort
    }

    return arr.sort(sortOptin[rot])
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log(solve([14, 7, 17, 6, 8], 'desc'));