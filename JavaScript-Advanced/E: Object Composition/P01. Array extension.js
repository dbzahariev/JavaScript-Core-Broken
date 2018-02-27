function slove(arr) {
    // last()
    // console.log(skip(2));
    // console.log(take(3));

    function last() {
        return arr[arr.length - 1];
    }

    function skip(n) {
        let res = arr;
        res.splice(0, n)
        return res;
    }

    function take(n) {
        return arr.slice(0, n);
    }

    function sum() {
        let sum =
    }
}

slove([1, 2, 3, 4])