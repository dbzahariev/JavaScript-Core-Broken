function Task4(rooms, guests) {
    let teaHouse = [];

    for (let as = 0; as < rooms.length; as++) {
        if (rooms[as].type === 'double-bedded') {
            rooms[as]['beds'] = 2;
        } else {
            rooms[as]['beds'] = 3;
        }
    }

    for (let as = 0; as < guests.length; as++) {
        const element = guests[as];
        element.first['Room'] = '';
        element.second['Room'] = '';
    }

    for (let i = 0; i < guests.length; i += 1) {
        const firstPerson = guests[i].first;
        const secondPerson = guests[i].second;

        if (firstPerson.Room != '') {
            continue;
        }
        if ((firstPerson.gender == 'male' &&
                secondPerson.gender == 'female') ||
            (firstPerson.gender == 'female' &&
                secondPerson.gender == 'male')) {


            for (let j = 0; j < rooms.length; j++) {
                if (rooms[j].beds == 2) {
                    rooms[j].beds -= 2;

                    firstPerson.Room = rooms[j].number;
                    secondPerson.Room = rooms[j].number;
                    i = 0;
                    break;
                }
            }
        }
    }

    for (let i = 0; i < guests.length; i++) {
        const firstPerson = guests[i].first;
        const secondPerson = guests[i].second;

        if (firstPerson.Room != '') {
            continue;
        }

        if (firstPerson.gender == secondPerson.gender) {
            for (let dd = 0; dd < rooms.length; dd++) {
                console.log(rooms[dd].beds);
                if (rooms[dd].beds >= 2) {
                    rooms[dd].beds -= 2;

                    firstPerson.Room = rooms[dd].number
                    secondPerson.Room = rooms[dd].number
                }
            }
        }
    }

    for (let i = 0; i < guests.length; i++) {

        const firstPerson = guests[i].first;
        const secondPerson = guests[i].second;

        if (firstPerson.Room != '' && secondPerson.Room != '') {
            continue
        }

        for (let j = 0; j < rooms.length; j++) {
            if (rooms[j].beds == 0) {
                continue
            }

            if (rooms[j].beds == 1) {
                firstPerson.Room = rooms[j].number;
            }
        }
    }

    for (let i = 0; i < guests.length; i++) {

        const firstPerson = guests[i].first;
        const secondPerson = guests[i].second;

        if (firstPerson.Room != '' && secondPerson.Room != '') {
            continue
        }

        if (firstPerson.Room == '') {
            teaHouse.push(firstPerson)
        }
        if (secondPerson.Room == '') {
            teaHouse.push(secondPerson)
        }
    }

    for (let i = 0; i < guests.length; i++) {

        const firstPerson = guests[i].first;
        const secondPerson = guests[i].second;
    }

    console.log(guests);
}

Task4([{
        number: '206',
        type: 'double-bedded'
    },
    {
        number: '311',
        type: 'triple'
    }
], [{
        first: {
            name: 'Tanya Popova',
            gender: 'female',
            age: 24
        },
        second: {
            name: 'Miglena Yovcheva',
            gender: 'female',
            age: 23
        }
    },
    {
        first: {
            name: 'Katerina Stefanova',
            gender: 'female',
            age: 23
        },
        second: {
            name: 'Angel Nachev',
            gender: 'male',
            age: 22
        }
    },
    {
        first: {
            name: 'Tatyana Germanova',
            gender: 'female',
            age: 23
        },
        second: {
            name: 'Boryana Baeva',
            gender: 'female',
            age: 22
        }
    }
])