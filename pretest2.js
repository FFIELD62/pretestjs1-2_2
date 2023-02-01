function highestDigit(num) {
    let text = num.toString();
    let num1 = [];
    let sum = [];
    let num2 = 0;
    for (const str of text) {
        num1.push(str);
    }

    for (let i = 0; i < num1.length; i++) {
        num2 = parseInt(num1[i]);
        sum = push(num2);
    }
    console.log(sum);
}

highestDigit(379); //9
//highestDigit(2); //2
//highestDigit(377401); //7