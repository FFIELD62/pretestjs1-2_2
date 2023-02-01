const simplePair = (data, n) => {
    let result = [];
    for (let item of data) {
        for (let item2 of data) {
            if (item != item2) {
                const sum = item * item2;
                if (sum == n) {
                    result.push(item);
                    result.push(item2);
                    return result;
                }
            }
        }
    }
    return null;
}
console.log(simplePair([1, 2, 3], 3));
console.log(simplePair([1, 2, 3], 6));