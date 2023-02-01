function arrayofMultiples(num1, num2) {
    let ans = [];
    for (let i = 0; i < num2; i++) {
        let sum = num1 * (i + 1);
        ans.push(sum);
        sum = 0;
    }
    console.log(ans);
}

arrayofMultiples(7, 5);
arrayofMultiples(12, 10);
arrayofMultiples(17, 6);