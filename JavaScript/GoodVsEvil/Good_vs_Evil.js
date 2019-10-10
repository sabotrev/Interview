/*
Good vs. Evil

    Description: Middle Earth is about to go to war. The forces of good will have many battles with
        the forces of evil. Different races will certainly be involved. Each race has a certain
        worth when battling against others. On the side of good we have the following races, with
        their associated worth:

        Hobbits: 1
        Men: 2
        Elves: 3
        Dwarves: 3
        Eagles: 4
        Wizards: 10
        On the side of evil we have:

        Orcs: 1
        Men: 2
        Wargs: 2
        Goblins: 2
        Uruk Hai: 3
        Trolls: 5
        Wizards: 10

        Thus, given the count of each of the races on the side of good, followed by the count of
        each of the races on the side of evil, determine which side wins.

    Example:
        input: goodStr = '1 1 1 1 1 1'
            evilStr = '1 1 1 1 1 1 1'
        output: Evil
        explanation: The first parameter will contain the count of each race on the side of good in
            the following order: Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
            The second parameter will contain the count of each race on the side of evil in the
            following order: Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.

    
    Notes: All values are non-negative integers. The resulting sum of the worth for each side will
        not exceed the limit of a 32-bit integer.
*/


/*
With reduce
*/
const goodVsEvil = (goodStr, evilStr) => {
    const goodMap = {
        Hobbits: 1,
        Men: 2,
        Elves: 3,
        Dwarves: 3,
        Eagles: 4,
        Wizards: 10
    }; // total = 23

    const evilMap = {
        Orcs: 1,
        Men: 2,
        Wargs: 2,
        Goblins: 2,
        Uruk_Hai: 3,
        Trolls: 5,
        Wizards: 10
    }; // total = 25

    const goodArr = goodStr.split` `;
    const evilArr = evilStr.split` `;

    let goodTotal = Object.values(goodMap).reduce((acc, val, i) => {
        return acc + (val * goodArr[i]);
    });

    let evilTotal = Object.values(evilMap).reduce((acc, val, i) => {
        return acc + (val * evilArr[i]);
    });

    if (goodTotal === evilTotal) {
        return 'tie';
    } else if (goodTotal > evilTotal) {
        return 'good';
    } else {
        return 'evil';
    }
}

console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1')); // evil
console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0')); // good
console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0')); // tie