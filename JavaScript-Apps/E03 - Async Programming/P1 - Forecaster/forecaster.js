function attachEvents() {
    $(`#submit`).click(getWeatherLocation)

    function getWeatherLocation() {
        $.get('https://judgetests.firebaseio.com/locations.json')
            .then(function (data) {
                let code
                for (let i = 0; i < data.length; i++) {
                    let city = data[i];
                    if (city.name === $(`#location`).val()) {
                        code = city.code
                        break;
                    }
                }

                findToday(code)
                findUpcoming(code)

            })
            .catch(function (err) {
                console.log(err);
            })
    }

    function findToday(code) {
        $.get(`https://judgetests.firebaseio.com/forecast/today/${code}.json`)
            .then(function (data) {
                $(`div#forecast`).css('display', '');
                $(`div#forecast > div#current`)
                    .append(`<span class="condition symbol">${findSymbol(data.forecast.condition)} </span>`)
                    .append(`<span class="condition">`);
                $(`span.condition:nth-child(3)`)
                    .append(`<span class="forecast-data">${data.name}</span>`)
                    .append(`<span class="forecast-data">${data.forecast.high}${findSymbol('Degrees')}/${data.forecast.low}${findSymbol('Degrees')}</span>`)
                    .append(`<span class="forecast-data">${data.forecast.condition}</span>`)
            })
    }

    function findSymbol(condition) {
        if (condition === 'Sunny') {
            return `&#x2600;`
        }
        if (condition === 'Partly sunny') {
            return `&#x26C5;`
        }
        if (condition === 'Overcast') {
            return `&#x2601;`
        }
        if (condition === 'Rain') {
            return `&#x2614;`
        }
        if (condition === 'Degrees') {
            return `&#176;`
        }
    }

    function findUpcoming(code) {
        $.get(`https://judgetests.firebaseio.com/forecast/upcoming/${code}.json`)
            .then(function (data) {
                $('div#upcoming')
                    .append(`<span class="upcoming">`)
                $(`span.upcoming`)
                    .append(`<span class="symbol">${findSymbol(data.forecast[0].condition)}</span>`)
                    .append(`<span class="forecast-data">${data.forecast[0].high}${findSymbol('Degrees')}/${data.forecast[0].low}${findSymbol('Degrees')}</span>`)
                    .append(`<span class="forecast-data">${data.forecast[0].condition}</span>`)


                $('div#upcoming')
                    .append(`<span class="upcoming"></span>`)
                $(`span.upcoming`)
                    .append(`<span class="symbol">${findSymbol(data.forecast[1].condition)}</span>`)
                    .append(`<span class="forecast-data">${data.forecast[1].high}${findSymbol('Degrees')}/${data.forecast[1].low}${findSymbol('Degrees')}</span>`)
                    .append(`<span class="forecast-data">${data.forecast[1].condition}</span>`)

            })
    }
}