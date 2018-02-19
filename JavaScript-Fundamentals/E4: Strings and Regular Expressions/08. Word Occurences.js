function wordOccurences(str1, word) {
    let pattern = new RegExp('\\b' + word + '\\b', 'ig');
    let match, count = 0;
    while (match = pattern.exec(str1)) {
        count++;
    }
    console.log(count);
}

wordOccurences('The waterfall was so high, that the child couldn’t see its peak.',
    'the');