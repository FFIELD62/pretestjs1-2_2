function sayHell0bye(str, num) {
    let char = ["Bye", "Hello"];
    let str1 = [];
    var result = str[0].toUpperCase() + str.substring(1);

    if (num > 0) {
        console.log(result, char[num]);
    } else
        console.log(char[num], result);
}

sayHell0bye("alon", 1); //Alon Hello
sayHell0bye("Tomi", 0); //Bye Tomi
sayHell0bye("jose", 0); //Bye Jose