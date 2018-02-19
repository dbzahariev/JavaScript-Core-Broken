function cappyJuice (input) {
    let juiceQuantities = new Map();
    let juiceBottles = new Map();
    for (let line of input) {
        let [juice, quantity] = line.split(/\s*=>\s*/g);
        quantity = Number(quantity);
        if (juiceQuantities.has(juice))
            quantity += juiceQuantities.get(juice);
        juiceQuantities.set(juice, quantity);
        if (quantity >= 1000)
            juiceBottles.set(juice, Math.floor(quantity / 1000));
    }
    for (let [juice, bottles] of juiceBottles)
        console.log(`${juice} => ${bottles}`);
}

cappyJuice([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);
