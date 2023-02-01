function totalVolume(num) {
    let sum = [];
    let sum1 = 0;
    let total = 0;

    for (let i = 0; i < num.length; i++) {
        for (let j = 0; j < num.length; j++) {
            sum1 = num[i][j].reduce((accumulator, currentValue) => accumulator * currentValue);
            console.log(sum1);
        }


    }

    // for (let i = 0; i < array.length; i++) {
    //     total += sum[i];
    // }


}
totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]); //63