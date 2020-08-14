function charCount(str,str1)
{ 
   var count=0;
   for(var i=0;i<str1.length;i++)
   {
       if(str1[i]==str)
       {
           count++;
       }
       //console.log(count);
   }
   return count;
}
console.log(charCount("b","big fat bubble"));