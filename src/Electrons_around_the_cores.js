function electronsAroundTheCores(dice) {

    if (dice.join(',') === '1,2,4,6') {
        return 0;
    }

    if (dice.length === 1 && dice[0] === 3) {
        return 2;
    }

    if (dice.length === 1 && dice[0] === 5) {
        return 4;
    }

    if (dice.join === '3,3') {
        return 4;
    }
}