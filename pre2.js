function repeatString(char, num) {
    str = "";
    check = typeof(char);
    if (check === "number") {
        console.log("Not a String");
    } else {
        for (let index = 0; index < num; index++) {
            str += char;
        }
    }

    console.log(str);

}

repeatString("Mubashir", 2);
repeatString("Matt", 3);
repeatString(1990, 7);