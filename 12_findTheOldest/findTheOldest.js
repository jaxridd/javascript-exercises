const findTheOldest = function(people) {
    const oldest = people.sort((a, b) => {
        let lastGuy;
        let nextGuy;
        if (!a.yearOfDeath) {
            lastGuy = new Date().getFullYear() - a.yearOfBirth;
        } else {
            lastGuy = a.yearOfDeath - a.yearOfBirth;
        }
        if (!b.yearOfDeath) {
            nextGuy = new Date().getFullYear() - b.yearOfBirth;
        } else {
            nextGuy = b.yearOfDeath - a.yearOfBirth;
        }
        return lastGuy > nextGuy ? -1 : 1;
    })
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
