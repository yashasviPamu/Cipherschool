function removeDups(arr){
    let unique=Array.from(new Set(arr))
    //console.log(unique);
    return unique;
}
var array=["john","talor","john","sine","cos"];
console.log(removeDups(array));