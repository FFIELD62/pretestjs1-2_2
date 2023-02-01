function sumOfCubes(num1) {
    let sum = 0;
    for (const num of num1) {
        sum += Math.pow(num, 3);
    }
    console.log(sum);
}
sumOfCubes([1, 5, 9]);
sumOfCubes([3, 4, 5]);
sumOfCubes([2]);
sumOfCubes([]);