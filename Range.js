
class Range {

    constructor(range) {

        let numbersInRange = []

        const regex = /[0-9]+/g

        const lowAndUppLimits = range.match(regex).map(number => parseInt(number))

        const lowerLimit = range[0] == '[' ? lowAndUppLimits[0] : lowAndUppLimits[0] + 1;
        const upperLimit = range.slice(-1) == ']' ? lowAndUppLimits[1] : lowAndUppLimits[1] - 1;

        for (let i = lowerLimit; i <= upperLimit; i++) {
            numbersInRange.push(i)

        }

        console.log(numbersInRange)


    }
}

const range = new Range("(3,5)");
