function electronsAroundTheCores(dice) {
    const count3 = dice.filter(d => d === 3).length;
    
    if (count3 > 0) {
        return count3 * 2;
    }
  
    if (dice.length === 1 && dice[0] === 5) {
        return 4;
    }

    const count5 = dice.filter(d => d === 5).length;

    if (count5 > 0){
        return count5 * 4;
    }
  
    return 0;
  }
