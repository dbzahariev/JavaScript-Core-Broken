function usernames(arr) {
    let usernames = new Set();
    for (let username of arr)
        usernames.add(username);
    console.log([...usernames].sort(sortByLengthAlpha).join('\n'));

    function sortByLengthAlpha(a, b) {
        if (a.length !== b.length)
            return a.length - b.length;
        return a.localeCompare(b);
    }
}

usernames([
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston'
]);