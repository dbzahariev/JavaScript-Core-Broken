function palindrome(str) {
    let newStr = str.split('').reverse().join('');
    console.log(newStr === str);
}

palindrome('racecar');
palindrome('haha');
palindrome('unitinu');