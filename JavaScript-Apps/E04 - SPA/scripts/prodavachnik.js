function startApp(){
    const appkey = ''
    $('#linkLogin').show()
    $('#viewLogin').show()
    let formLogin = $('#formLogin');
    $('#buttonLoginUser').on('click', loginUser);

    function loginUser(ev) {
        let username = formLogin.find('input[name=username]').val()
        let password = formLogin.find('input[name=passwd]').val()

        console.log(username);
        console.log(password);
    }
}