function solve(keyword, text) {
    let pattern = /(north|east)\D*(\d{2})[^,]*(,)\D*(\d{6})/gi;
    let messagePattern = new RegExp(`(${keyword})(.*?)(${keyword})`, 'g');
    let message = messagePattern.exec(text)[2];

    let latOutput = '';
    let longOutput = '';
    let match = pattern.exec(text);
    while (match) {
        if (match[1].toLowerCase() === 'north') {
            latOutput = `${match[2]}.${match[4]} N`;
        } else {
            longOutput = `${match[2]}.${match[4]} E`;
        }
        match = pattern.exec(text);
    }

    console.log(latOutput);
    console.log(longOutput);
    console.log(`Message: ${message}`);
}


solve('4ds',
    'eaSt 19,432567noRt north east 53,123456north 43,3213454dsNot all those who wander are lost.4dsnorth 47,874532')