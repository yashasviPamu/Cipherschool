function specialReverse(str,s)
{
    var joinString="";
    var splitString=str.split(" ");
    splitString.forEach(element => {
        if(element[0]==s)
        {
            element=element.split("").reverse().join("");
        }
        console.log(element);
        joinString+=element+" ";
    }); 
    
    return joinString;

}
console.log(specialReverse("Word searches are super fun","s"));