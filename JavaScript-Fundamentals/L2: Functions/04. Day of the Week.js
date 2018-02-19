function dayOfTheWeek(N) {
    let dayOfWeek = {
        "Monday": 1,
        "Tuesday": 2,
        "Wednesday": 3,
        "Thursday": 4,
        "Friday": 5,
        "Saturday": 6,
        "Sunday": 7
    };
    let result = dayOfWeek[N];
    result !== undefined ? console.log(result) : console.log('error');
}

dayOfTheWeek("Monday");