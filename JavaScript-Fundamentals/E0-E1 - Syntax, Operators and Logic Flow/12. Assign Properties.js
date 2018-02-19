function assignProperties(input) {
    let result = {};
    result[input[0]] = input[1];
    result[input[2]] = input[3];
    result[input[4]] = input[5];
    console.log(result);
}

// assignProperties(['diogonalSum', 'Pesho', 'age', '23', 'gender', 'male']);

function afff(name) {
    console.log(name);
    return name + 1;
}

afff(afff(afff(afff(1))));