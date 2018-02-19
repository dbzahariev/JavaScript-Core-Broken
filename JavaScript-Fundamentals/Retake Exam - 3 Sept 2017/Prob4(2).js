function prob4(rooms, guests) {
    let teaHouse = {
        number: 'teaHouse',
        type: 'Free',
        guests: []
    }
    // rooms.push(teaHouse)
    for (let i = 0; i < rooms.length; i++) {
        rooms[i]['guests'] = []
        if (rooms[i].type == 'double-bedded') {
            rooms[i]['beds'] = 2;
        }
        if (rooms[i].type == 'triple') {
            rooms[i]['beds'] = 3;
        }
    }

    for (let i = 0; i < guests.length; i++) {
        let firstPerson = guests[i].second
        let secondPerson = guests[i].first

        if (firstPerson.gender == secondPerson.gender) {
            teaHouse.guests.push(firstPerson)
            teaHouse.guests.push(secondPerson)
        } else {
            for (let j = 0; j < rooms.length; j++) {
                const thisRoom = rooms[j];
                if (thisRoom.type == 'double-bedded') {
                    thisRoom.guests.push(firstPerson);
                    thisRoom.guests.push(secondPerson);
                    thisRoom.beds -= 2;
                    break;
                }
            }
        }
    }

    for (let i = 0; i < rooms.length; i++) {
        const thisRoom = rooms[i];
        if (thisRoom.beds == 0) {
            continue
        } else {
            for (let j = 0; j < teaHouse.guests.length; j++) {
                if (thisRoom.beds == 0) {
                    break;
                }
                const lonlyPerson = teaHouse.guests.splice(0, 1)[0]
                thisRoom.guests.push(lonlyPerson);
                thisRoom.beds--;
                j = -1;
            }
        }
    }
    
    let result = '';
    for (let i = 0; i < rooms.length; i++) {
        let thisRoom = rooms[i]

        result += `Room number: ${thisRoom.number}\n`
        for (let j = 0; j < thisRoom.guests.length; j++) {
            const thisGuest = thisRoom.guests[j];
            result += `--Guest Name: ${thisGuest.name}\n`
            result += `--Guest Age: ${thisGuest.age}\n`
        }
        result += `Empty beds in the room: ${thisRoom.beds}\n`
    }
    if (teaHouse.guests.length > 0) {
        result += `Guests moved to the tea house: ${teaHouse.guests.length}`;
    }

    console.log(result);

    // console.log('END');
}

prob4([{
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
]);