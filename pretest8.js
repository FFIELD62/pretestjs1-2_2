function simplePair(num1,num){
    const str = [];
    const str1 = 0; 

    for (let i = 0; i < num1.length; i++){
        
        for (let j = i+1; j < num1.length; j++){
            str[i] = num1[i] * num1[j];
            srt1 = str[i];
            if (str[i] === num){
                console.log (num," = ",num1[i]," + ",num1[j] );
            }
            else if (i > num1.length && str[i] != num){
                console.log("null");
            }
            
        }
            
        
    }
    
     
    
    

}
simplePair([1,2,3],3);
simplePair([1,2,3],6);
simplePair([1,2,3],9);