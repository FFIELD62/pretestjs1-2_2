function capToFront(char) {
    strupper = "";
    strunder = "";

    for (let index = 0; index < char.length; index++) {
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
capToFront("hApPy"); //APhpy
capToFront("moveMENT"); //MENTmove
capToFront("shOrtCAKE"); //OCAKEshrt