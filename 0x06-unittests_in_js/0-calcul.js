function calculateNumber(a, b){
    const a_round = Math.round(a);
    const b_round = Math.round(b);
    const sum = a_round + b_round;
    return sum;
}

module.exports = calculateNumber;