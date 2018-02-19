function heroicInventory(input) {
    let herosData = [];
    for (let i = 0; i < input.length; i++) {
        let element = input[i];
        let [name, level, items] = element.split(/\s+\/\s+/);
        if (items!==undefined)
            items = items.split(', ');
        else
            items = [];
        let oneHero = {};
        oneHero['name'] = name;
        oneHero['level'] = Number(level);
        oneHero['items'] = items;
        herosData.push(oneHero);
    }
    console.log(JSON.stringify(herosData));
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Dereka / 13',
    'Hes / 1 / Desolator, Sentinel, Antara']);