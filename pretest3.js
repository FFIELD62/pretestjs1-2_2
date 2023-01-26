function capToFront(char){
    const strupper = [];
    const strunder = [];

    for (let str1 of char) {
        
        if (ctype_upper(str1)) {
            strupper += str1;
        } else {
            strunder += str1;
        }
    
        console.log(strupper);
        console.log(strunder);
    }

}


capToFront("hApPy");
//capToFront("moveMENT");
//capToFront("shOrtCAKE");