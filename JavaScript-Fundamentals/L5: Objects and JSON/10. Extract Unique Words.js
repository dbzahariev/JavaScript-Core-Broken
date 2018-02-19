function extractUniqueWords(input) {
    let mySet = new Set();

    for (let sentence of input) {
        sentence = sentence.split(/[, .]/)
            .filter(a=>a!=='');
        for (let word of sentence) {
            mySet.add(word.toLowerCase());
        }
    }
    console.log([...mySet.values()].join(', '));
}

extractUniqueWords(['Lorem Lorem ipsum Lorem lorem dolor sit amet, consectetur',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.',
    'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',
    'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.',
    'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',
    'Morbi in ipsum varius, pharetra diam vel, mattis arcu.',
    'Integer ac turpis commodo, varius nulla sed, elementum lectus.',
    'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.']);