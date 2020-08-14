function testJackpot([a,b,c,d]){
    var n=a.localeCompare(b);
    var m=a.localeCompare(c);
    var o=a.localeCompare(d);
    if(n==0 && m==0 && o==0)
    {
        return true;
    }
    else{
        return false;
    }
}

console.log(testJackpot(["abc","abc","abc","abc"]));