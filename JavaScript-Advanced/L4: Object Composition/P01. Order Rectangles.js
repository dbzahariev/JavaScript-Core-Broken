function slove(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = createRect(arr[i][0], arr[i][1])
    }
    arr.sort((a, b) => a.compareTo(b))
    return arr;

    function createRect(width, height) {
        let rect = {
            width: width,
            height: height,
            area: () => rect.width * rect.height,
            compareTo: function (other) {
                let result = other.area() - rect.area();
                return result || (other.width - rect.width);
            }
        };
        return rect;
    }
}

console.log(slove([[10, 5], [5, 12]]));