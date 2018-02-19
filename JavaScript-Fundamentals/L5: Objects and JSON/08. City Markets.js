function cityMarkets(input) {
    let obj = {};
    for (let i = 0; i < input.length; i++) {
        let element = input[i];
        element = element.split(/\s+->\s+/);
        let city = element[0];
        let product = element[1];
        if (!obj.hasOwnProperty(city)) {
            obj[city] = {};
        }
        let price = element[2].split(/\s+:\s+/);
        if (!obj[city].hasOwnProperty(product)) {
            obj[city][product] = 0;
        }
        obj[city][product] += (price[0] * price[1]);
    }
    for (let townName of Object.keys(obj)) {
        console.log(`Town - ${townName}`);
        let products = obj[townName];
        for (let product of Object.keys(products)) {
            let productName = product;
            let productTotalIncome = obj[townName][product];
            console.log(`$$$${productName} : ${productTotalIncome}`);
        }
    }
}

cityMarkets(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3']);