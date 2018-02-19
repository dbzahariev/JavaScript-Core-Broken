function townsToJSON(towns) {
    let townsArr = [];
    for (let town of towns.slice(1)) {
        let [townName, lat, lng] =
            town.split(/\s*\|\s*/)
                .filter(a => a !== '');
        let townObj = {
            Town: townName, Latitude:
                Number(lat), Longitude: Number(lng)
        };
        townsArr.push(townObj);
    }
    console.log(JSON.stringify(townsArr));
}

townsToJSON(['|Town|Lat|Lng|', '|Sofia |42|23|']);