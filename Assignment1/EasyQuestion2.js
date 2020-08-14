function addUp(n)
{
    var sum=0;
    //console.log(sum);
    for(var i=1;i<=n;i++)
    {
        sum+=i;
    }
    //console.log(sum);
    return sum;
}
console.log(addUp(600));