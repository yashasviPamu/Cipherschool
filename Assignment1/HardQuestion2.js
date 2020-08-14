function numInStr(arr){
    let array=[]
    var regularExp={
        onlyMixOfAlphaNumeric:/^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$/
    }
    for(var i=0;i<arr.length;i++)
    {
        var expMatch= regularExp.onlyMixOfAlphaNumeric.test(arr[i]);

        if (expMatch==true)
        {
            array.push(arr[i]);
        }
    }
    return array;
}
var array=["1a","a","2b","b"];
var array1=["abc","abc10"];
console.log(numInStr(array));