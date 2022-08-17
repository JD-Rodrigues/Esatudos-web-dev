function bonus(time, extraTime) {
    return time * 20 + extraTime * 30
}

function discount(salary, off) {
    return salary - off
}

module.exports = {bonus,discount}