function capToFront(char) {
    strupper = "";
    strunder = "";

    for (let index = 0; index < char.length; index++) {
        // if (char[index] === char[index].toUpperCase()) {
        //     strupper += char[index];
        // } else strunder += char[index];

        switch (char[index]) {
            case char[index].toUpperCase():
                strupper += char[index];
                break;
            default:
                strunder += char[index];
        }
    }

    return console.log(strupper + strunder);



}


capToFront("hApPy");
//capToFront("moveMENT");
//capToFront("shOrtCAKE");