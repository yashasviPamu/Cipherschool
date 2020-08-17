function switchDisplay(theid){ 
    var thearray= new Array("tile1","tile2","tile3","tile4"); 
    for(i=0; i<thearray.length; i++){ 
          if(thearray[i] == theid){ 
                document.getElementById(theid).style.display="block"; 
          }
          else{ 
                document.getElementById(thearray[i]).style.display="none"; 
          } 
    } 
}
function show()
{
    document.getElementById("tile1").style.display="block";
    document.getElementById("tile2").style.display="block";
    document.getElementById("tile3").style.display="block";
    document.getElementById("tile4").style.display="block";
}
function find()
{
    var entry=document.getElementById("entries");
    var search=entry.value.toUpperCase();
    if(String(search).equals("CAKE"))
    {
        document.getElementById("tile1").style.display="block";
        document.getElementById("tile2").style.display="none";
        document.getElementById("tile3").style.display="none";
        document.getElementById("tile4").style.display="none"; 
    }
    if(search.equals("CUPCAKE"))
    {
        document.getElementById("tile1").style.display="none";
        document.getElementById("tile2").style.display="block";
        document.getElementById("tile3").style.display="none";
        document.getElementById("tile4").style.display="none"; 
    }
    if(search.equals("SWEET"))
    {
        document.getElementById("tile1").style.display="none";
        document.getElementById("tile2").style.display="none";
        document.getElementById("tile3").style.display="block";
        document.getElementById("tile4").style.display="none"; 
    }
    if(search.equals("DOUGHNUT"))
    {
        document.getElementById("tile1").style.display="none";
        document.getElementById("tile2").style.display="none";
        document.getElementById("tile3").style.display="none";
        document.getElementById("tile4").style.display="block"; 
    }
}
