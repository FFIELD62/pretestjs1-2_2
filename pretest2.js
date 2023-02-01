function highestDigit(digit) {
    Str = digit.toString().split('');
    let temp = Str[0];
    for (let i = 0; i < Str.length; i++) {
        if (temp < Str[i]) {
            temp = Str[i];
        }
    }
    console.log(temp);
}
highestDigit(379); //9
highestDigit(2); //2
highestDigit(377401); //7