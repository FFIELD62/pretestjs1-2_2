function highestDigit(num){
    const greatestDigit = (num = 0, greatest = 0) => {
        if(num){
           const max = Math.max(num % 10, greatest);
           return greatestDigit(Math.floor(num / 10), max);
        };
        return greatest;
     };
     console.log(greatestDigit(num));
}

highestDigit(379);
highestDigit(2);
highestDigit(377401);