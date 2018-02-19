function roadRadar(input) {
    function getLimit(zone) {
        switch (zone) {
            case 'motorway':
                return 130;
            case 'interstate':
                return 90;
            case 'city':
                return 50;
            case 'residential':
                return 20;
        }
    }

    function getInformation(speed, limit) {
        let overSped = speed - limit;
        if (overSped <= 0) {
            return false;
        } else if (overSped <= 20) {
            return 'speeding';
        } else if (overSped <= 40) {
            return 'excessive speeding';
        } else if (overSped > 40) {
            return 'reckless driving';
        }
    }

    let res = getInformation(input[0], getLimit(input[1]));
    if (res !== false) {
        console.log(res);
    }
}

roadRadar([40, 'city']);
roadRadar([21, 'residential']);
roadRadar([120, 'interstate']);
roadRadar([200, 'motorway']);