function printDeckOfCards(arr) {
    let allCards = []
    try {
        extractedCards();
    }
    catch (ex){
        console.log(ex.message)
        return
    }

    let validCards = []
    output()

    function output() {
        for (let i = 0; i < allCards.length; i++) {
            let element = allCards[i]
            validCards.push(element)
        }
        console.log(validCards.join(' '))
    }

    function extractedCards() {
        for (let i = 0; i < arr.length; i++) {
            let element = arr[i]
            let faces = element.slice(0, -1)
            let suits = element.slice(-1)
            allCards.push(makeCard(faces, suits))
        }

        function makeCard(faces, suits) {
            let aveFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
            let aveSuits = {
                'S': '\u2660',
                'H': '\u2665',
                'D': '\u2666',
                'C': '\u2663'
            }
            if ((aveFaces.indexOf(faces) === -1) || (!aveSuits.hasOwnProperty(suits))) {
                throw new Error(`Invalid card: ${faces}${suits}`)
            }

            return {
                faces: faces,
                suits: suits,
                toString: function () {
                    return this.faces + aveSuits[this.suits]
                }
            }
        }
    }
}

printDeckOfCards(['AS', '10D', 'KH', '1C', '11C'])