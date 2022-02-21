
function average(array) {
    sum = 0
    for (num of array) {
        sum += num
    }
    return sum/array.length
} 

console.log(average([1,2,3,4,5]))