function $(id)
{
    return document.getElementById(id);
}
function check()
{
    if(($("nameb").value).length<10)
    {
        alert("enter valid name!");
    }
    if(($("addressb").value).length<10)
    {
        alert("enter valid address!");
    }
    if(($("cityb").value).length<10)
    {
        alert("enter valid city!");
    }
    else
    {
        $("demon").innerHTML="name:"+$("nameb").value+"<br>address:"+$("addressb").value+"<br>city"+$("cityb").value;
        $("nameb").value="";
        $("addressb").value="";
        $("cityb").value="";
    }
}
window.onload=function(){
    $("check").onclick=check;
};