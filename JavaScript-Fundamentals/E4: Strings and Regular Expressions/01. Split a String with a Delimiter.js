function splitAStringWithADelimiter(str, delimetar) {
    let arr = str.split(delimetar);
    console.log(arr.join('\n'));
}

splitAStringWithADelimiter('One-Two-Three-Four-Five', '-');