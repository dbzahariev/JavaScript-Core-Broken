function prob1(base, increment) {
    let maxHeight = Math.ceil(base / 2);

    let stone = 0
    let marble = 0
    let lapis = 0
    for (let i = 1; i < maxHeight; i++) {
        if (i != 0 && i % 5 == 0) {
            let thisStone = ((base - 2) * (base - 2)) * increment
            stone += thisStone
            lapis += ((base * base) * increment) - thisStone
            base -= 2;
        }
        else {
            let thisStone = ((base - 2) * (base - 2)) * increment
            stone += thisStone
            marble += ((base * base) * increment) - thisStone
            base -= 2;
        }
    }


    console.log('Stone required: ' + Math.ceil(stone));
    console.log('Marble required: ' + Math.ceil(marble));
    console.log('Lapis Lazuli required: ' + Math.ceil(lapis));
    console.log('Gold required: ' + Math.ceil((base * base) * increment));
    console.log('Final pyramid height: ' + Math.floor(maxHeight * increment));
}

prob1(1, 1);