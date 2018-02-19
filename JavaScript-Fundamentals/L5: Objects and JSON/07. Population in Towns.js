function populationInTowns(input) {
    let myMap = new Map();
    for (let i = 0; i < input.length; i++) {
        let element = input[i].trim().split(/[<->]/g)
            .filter(a => a !== '')
            .filter(a => a !== '-');
        let city = element[0].trim();
        let population = Number(element[1].trim());
        if (myMap.has(city)) {
            myMap.set(city, myMap.get(city) + population);
        } else {
            myMap.set(city, population);
        }
    }
    for (let [key, value] of myMap) {
        console.log(`${key} : ${value}`);
    }
}

populationInTowns(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);