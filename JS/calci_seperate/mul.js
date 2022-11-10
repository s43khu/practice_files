function $(id)
{
    return document.getElementById(id);
}
async function mul()
{
    var a=parseInt($("var1b").value);
    var b=parseInt($("var2b").value);
    $("demon").value=a*b;
}
window.onload=function(){
    $("sum").onclick=add;
    $("sub").onclick=sub;
    $("mul").onclick=mul;
};