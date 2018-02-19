function matchDates(input) {
    let dates = [], match;
    let datePattern = /\b(\d{1,2})-([A-Z][a-z]{2})-(\d{4})\b/g;
    for (let sentence of input) {
        while (match = datePattern.exec(sentence))
            dates.push(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
    }
    console.log(dates.join('\n'));
}

matchDates(['I am born on 30-Dec-1994.',
    'My father is born on the 29-Jul-1955.']);