function tuckIn(...num) {
    let sum = [];

    for (let i = 0; i < num.length; i++) {
        for (let j = 0; j < num[i].length; j++) {
            sum.push(num[i][j]);
        }
    }

    sum.sort((a, b) => a - b);
    console.log(sum);
}

tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
tuckIn([15, 150], [45, 75, 35]) //[15, 45, 75, 35, 150]
tuckIn([
    [1, 2],
    [5, 6]
], [
    [3, 4]
]);