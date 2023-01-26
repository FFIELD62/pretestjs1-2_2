function removeDups(num){
    const num1= [];
    for (let i = 0; i < num.length; i++){
        
        for (let j = i+1; j < num.length; j++){
            if (num[i] === num[j]){
            num1.push(num[i]);  
            }
            
        }
        
}
    console.log(num1);
}

removeDups([1,0,1,0]);
removeDups(["The","big","cat"]);