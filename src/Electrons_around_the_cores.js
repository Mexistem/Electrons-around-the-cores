function electronsAroundTheCores(dice) {
    const count3 = dice.filter(d => d === 3).length;
    const count5 = dice.filter(d => d === 5).length;

    return count3 * 2 + count5 * 4;
}