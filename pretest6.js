function removeDups(word){
    return Array.from(new Set(word))
}


console.log(removeDups([1,0,1,0]));
console.log(removeDups(["The","big","cat"]));
console.log(removeDups(["John","Taylor","John"]));