function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

let dollarFormatter = result(currencyFormatter)
console.log(dollarFormatter(123.54))

function result(func) {
    return function (value) {
        return func(',', '$', true, value)
    }
} 