function subSum(arr, start, end) {
    if (!Array.isArray(arr)) {
        return
    }

    let isError = false
    arr.forEach(a => {
        if (typeof a == 'string')
            isError = true
        }
    )

    if (isError == true){
        return
    }
    console.log('hi')
    if (start < 0) {
        start = 0
    }

}

// subSum([10, 20, 30, 40, 50, 60], 3, 300)
// subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)
subSum([10, 'twenty', 30, 40], 0, 2)
// subSum([], 1, 2)
// subSum('text', 0, 2)