function Slove(food, doing) {
    const eatenFoods = []
    for (let i = 0; i < doing.length; i++) {
        const element = doing[i].split(' ')

        if (element[0] == 'Serve') {
            serve()
        } else if (element[0] == 'Add') {
            addMeal(element[1])
        } else if (element[0] == 'Shift') {
            shift(element[1], element[2])
        } else if (element[0] == 'Eat') {
            eat()
        } else if (element[0] == 'Consume') {
            consume(element[1], element[2])
        } else if (element[0] == 'End') {
            endEaten2()
            break
        }


        function serve() {
            let mealName = food.pop()
            if (mealName == undefined) {
                return
            }
            console.log(`${mealName} served!`)
        }

        function addMeal(meal) {
            if (meal == undefined) {
                return
            }
            food.unshift(meal)
        }

        function shift(fromIndex, toIndex) {
            if (fromIndex < 0 || fromIndex > food.length) {
                return
            }
            if (toIndex < 0 || toIndex > food.length) {
                return
            }
            if (food.length < 2) {
                return
            }
            let temp = food[fromIndex]
            food[fromIndex] = food[toIndex]
            food[toIndex] = temp
        }

        function eat() {
            let meat = food.shift()
            if (meat == undefined) {
                return
            }
            eatenFoods.push(meat)
            console.log(`${meat} eaten`)
        }

        function consume(startIndex, endIndex) {
            if (startIndex < 0 || startIndex > food.length) {
                return
            }
            if (endIndex < 0 || endIndex > food.length) {
                return
            }
            let count = endIndex - startIndex + 1
            if (food.length < count) {
                return
            }
            let miniArr = food.splice(startIndex, count)
            miniArr.forEach(a => eatenFoods.push(a))
            console.log('Burp!')
        }

        function endEaten2() {
            if (food.length == 0) {
                console.log(`The food is gone`)
            } else {
                console.log(`Meals left: ${food.join(', ')}`)
            }
            console.log(`Meals eaten: ${eatenFoods.length}`)
        }
    }
}


Slove([], [
    `Serve`,
    `Eat`,
    `Consume 0 0`,
    `Add chicken`,
    `Add rice`,
    `Eat`,
    `End`
])