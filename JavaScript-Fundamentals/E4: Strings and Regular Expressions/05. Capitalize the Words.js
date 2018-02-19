function capitalizeTheWords(str) {
    let arr = str.toLowerCase().split(' ');
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        word = word.split('');
        word.unshift(word[0].toUpperCase());
        word.splice(1, 1);
        word = word.join('');
        arr[i] = word;
    }
    console.log(arr.join(' '));
}

function capitalizeTheWordsRegex(str) {
    let arr = str.toLowerCase().split(' ');
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        let ss = word[0].replace(/\w/g, word[0].toUpperCase());
        word = word.split('');
        word = word.splice(1);
        word.unshift(ss);
        word = word.join('');
        arr[i] = word;
    }
    console.log(arr);
}

capitalizeTheWords('Was that Easy? tRY thIs onE for SiZe!');
capitalizeTheWordsRegex('Was that Easy? tRY thIs onE for SiZe!');

