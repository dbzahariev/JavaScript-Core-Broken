function lastMonth(input) {
    let lastDayLastMonth = new Date(input[2], input[1] - 1, 0);
    console.log(lastDayLastMonth.getDate());
}

lastMonth([17, 3, 2002]);