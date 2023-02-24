function sliceSum(num1, num2) {
    let sum = 0;
    for (let i = 0; i < num2; i++) {
        sum = sum + num1[i];
    }
    console.log(sum);
}

sliceSum([1, 3, 2], 2) // 4
sliceSum([4, 2, 5, 7], 4) // 18
sliceSum([3, 6, 2], 0) // 0