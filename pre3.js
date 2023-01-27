function multiSum(num) {
    let sum = 0;

    for (let index = 0; index < 11; index++) {
        sum += num * index;
    }
    console.log(sum)
}


multiSum(1); //55
multiSum(6); //330
multiSum(10); //550
multiSum(8) // 440
multiSum(2) // 110