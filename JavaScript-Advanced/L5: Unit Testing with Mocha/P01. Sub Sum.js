function subSum(arr, start, end) {
    if (!Array.isArray(arr)) {
        return NaN
    }
    start = start < 0 ? 0 : start
    end = end >= arr.length ? arr.length - 1 : end

    let sum = 0
    for (let i = start; i < end+1; i++) {
        sum += Number(arr[i])
    }
    return sum
}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
// subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)
// subSum([10, 'twenty', 30, 40], 0, 2)
// subSum([], 1, 2)
// subSum('text', 0, 2)