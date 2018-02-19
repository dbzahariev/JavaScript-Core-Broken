function escapeChar(str) {
    str = str.toString();
    return str.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
}

function camelCase(str) {
    console.log(str);
    const regex = /(\d+)([. ]+)(.+)/g;
    let match;
    while ((match = regex.exec(str)) !== null) {
        str = match[3];
    }
    str = str.split(' ');
    for (let i = 0; i < str.length; i++) {
        let word = str[i];
        let newWord;
        if (i === 0) {
            newWord = word[0].toLocaleLowerCase();
        } else {
            newWord = word[0].toUpperCase();
        }
        for (let i = 1; i < word.length; i++) {
            newWord += word[i];
        }
        str[i] = newWord;
    }
    console.log(str.join(''));
}

// escapeChar();
camelCase('01. Heroic Inventory');
