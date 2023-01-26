function simplePair(num1,num){
    const str = [];
    for (let i = 0; i < num1.length; i++){
        
        for (let j = i+1; j < num1.length; j++){
            str[i] = num1[i] * num1[j];

            if (str[i] === num){
                console.log (num," = ",num1[i]," + ",num1[j] );
            }
           
            
        }
            
        
    }

  
     
    
    

}
simplePair([1,2,3],3);
simplePair([1,2,3],6);
simplePair([1,2,3],9);