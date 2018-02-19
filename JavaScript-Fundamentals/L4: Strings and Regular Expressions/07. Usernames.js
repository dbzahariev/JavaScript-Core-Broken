function usernames(input) {
    let finalResult = [];
    for (let i = 0; i < input.length; i++) {
        let token = input[i].split('@');
        let domein = token[1].split('.');
        let result = token[0] + '.';
        for (let str of domein) {
            result+=str[0];
        }
        finalResult.push(result);
    }
    console.log(finalResult.join(', '));
}

usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);