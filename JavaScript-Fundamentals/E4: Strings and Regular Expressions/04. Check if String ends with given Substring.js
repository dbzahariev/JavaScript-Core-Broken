function endWith(str1, str2) {
    console.log(str1.split('').slice(str1.length - str2.length).join('') === str2);
}

endWith('This sentence ends with fun?', 'fun?');
// endWith('This is Houston, we have…', 'We have…');