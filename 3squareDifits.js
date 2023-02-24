function squareDifits(num) {
    let num0 = [];
    let num1 = 0;
    let num2 = 0;
    let sum1 = 0;

    num0 = num.toString();
    for (let i = 0; i < num0.length; i++) {
        num1 = Number(num0[i]);
        num2 = Math.pow(num1, 2);

        sum1 += num2.toString();

    }
    num2 = Number(sum1);

    console.log(typeof(num2), " : ", num2);

}
squareDifits(9119);
squareDifits(2483);
squareDifits(3212);