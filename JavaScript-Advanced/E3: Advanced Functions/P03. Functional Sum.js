let add = (function add() {
    let sum = 0;

    function incre(num) {
        sum += num
        return incre
    }

    incre.toString = function () {
        return sum
    };
    return incre;
})();

console.log(add(1)(6)(-3));