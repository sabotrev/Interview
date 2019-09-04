/*
Batches

    Description: Create a function batches that returns the maximum number of whole batches that
        can be cooked from a recipe. It accepts two objects as arguments: the first object is the
        recipe for the food, while the second object is the available ingredients. Each
        ingredient's value is a number representing how many units there are.


    Example:
        input: recipe = { milk: 100, butter: 50, flour: 5 }
            available = { milk: 132, butter: 48, flour: 51 }
        output: 0

        input: recipe = { milk: 2, sugar: 40, butter: 20 },
            available = { milk: 5, sugar: 120, butter: 500 }
        output: 2
*/


/*
Brute Force
*/
const batches1 = (recipe, available) => {
    if (Object.keys(recipe).length > Object.keys(available).length) {
        return 0;
    }

    const amountMap = {};
    const max = 0;
    for (let ingredient in recipe) {
        if (available.hasOwnProperty(ingredient)) {
            amountMap[ingredient] = Math.floor(available[ingredient] / recipe[ingredient]);
        }
    }

    let amountArray = Object.values(amountMap);

    return Math.min(...amountArray);
};

console.log(batches1(
    { milk: 100, butter: 50, flour: 5 },
    { milk: 132, butter: 48, flour: 51 }
)); // 0

console.log(batches1(
    { milk: 100, flour: 4, sugar: 10, butter: 5 },
    { milk: 1288, flour: 9, sugar: 95 }
)); // 0

console.log(batches1(
    { milk: 100, butter: 50, cheese: 10 },
    { milk: 198, butter: 52, cheese: 10 }
));

console.log(batches1(
    { milk: 2, sugar: 40, butter: 20 },
    { milk: 5, sugar: 120, butter: 500 }
)); // 2


/*
Eloquently
*/
const batches2 = (recipe, available) => {
    return Math.floor(
        Math.min(
            ...Object.keys(recipe).map(ingredient => {
                return available[ingredient] / recipe[ingredient] || 0;
            })
        )
    );
};

console.log(batches2(
    { milk: 100, butter: 50, flour: 5 },
    { milk: 132, butter: 48, flour: 51 }
)); // 0

console.log(batches2(
    { milk: 100, flour: 4, sugar: 10, butter: 5 },
    { milk: 1288, flour: 9, sugar: 95 }
)); // 0

console.log(batches2(
    { milk: 100, butter: 50, cheese: 10 },
    { milk: 198, butter: 52, cheese: 10 }
));

console.log(batches2(
    { milk: 2, sugar: 40, butter: 20 },
    { milk: 5, sugar: 120, butter: 500 }
)); // 2