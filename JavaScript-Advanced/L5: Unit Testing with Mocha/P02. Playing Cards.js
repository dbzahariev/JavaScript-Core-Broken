function makeCard(faces, suits) {
    let aveFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    let aveSuits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    }
    if ((aveFaces.indexOf(faces) === -1) || (!aveSuits.hasOwnProperty(suits))) {
        throw new Error('Invalid input data!')
    }

    return {
        faces: faces,
        suits: suits,
        toString: function () {
            return this.faces + aveSuits[this.suits]
        }
    }
}

// console.log('' + makeCard('1', 'C'));
console.log('' + makeCard('2', 'D'));