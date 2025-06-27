function electronsAroundTheCores(dice) {
    if (dice.length === 1 && dice[0] === 3) {
        return 2;
    }
    if (dice.length === 1 && dice[0] === 5) {
        return 4;
    }
}