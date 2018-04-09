$(() => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

        this.get('#/index.html', () => {
            this.swap('<h2>Home Page</h2>');
        });
        this.get('#/about', () => {
            this.swap('<h2>About Page</h2>');
        });
        this.get('#/contact', () => {
            this.swap('<h2>Contact Page</h2>');
        });

        this.get('#/demo', (ctx) => {
            console.log(ctx.path)
        })

        this.get('#/login', (ctx) => {
            ctx.swap('<form action="#/login" method="post">\n' +
                '  User: <input name="user" type="text">\n' +
                '  Pass: <input name="pass" type="password">\n' +
                '  <input type="submit" value="Login">\n' +
                '</form>')
        })

        this.post('#/login', (context) => {
            console.log(context.params.user);
            console.log(context.params.pass);
        });

        this.get('#/hello/:name', (ctx) => {
            ctx.title = 'Hello!'
            ctx.name = ctx.params.name;
            ctx.partial('./Teplates/greeting.hbs');
        })
    })

    app.run();
})