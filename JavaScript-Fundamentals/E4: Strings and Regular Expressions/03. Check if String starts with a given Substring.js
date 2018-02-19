function checkString(str1, str2) {
    console.log(str1.split('').slice(0, str2.length).join('') === str2);

}

// checkString('How have you been?', 'how');
checkString('The quick brown fox…', 'The quick brown fox…');