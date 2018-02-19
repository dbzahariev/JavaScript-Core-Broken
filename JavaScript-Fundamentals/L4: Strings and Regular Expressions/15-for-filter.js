function fillForm(username, email, phone, data) {
    data.forEach(line => {
        line = line.replace(/<![a-zA-Z]+!>/g, username);
        line = line.replace(/<@[a-zA-Z]+@>/g, email);
        line = line.replace(/<\+[a-zA-Z]+\+>/g, phone);
        console.log(line);
    });
}

// formFilter('Pesho',
//     'pesho@softuni.bg',
//     '90-60-90',
//     ['Hello, <!username!>!',
//     'Welcome to your Personal profile.',
//     'Here you can modify your profile freely.',
//     'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
//     'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
//     'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']);

fillForm('pit', 'pit@pit.com', '032746',
    ['I am <!user!>, my email is <@email@>, my phone is <+p+>.']);