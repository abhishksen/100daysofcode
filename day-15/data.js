export const addNums = (...nums) => {
    let sum = 0;
    for (let item of nums) {
        sum += item;
    }
    return sum;
}