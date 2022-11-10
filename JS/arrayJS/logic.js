var names=[];
var scores=[];
function $(id)
{
    return document.getElementById(id);
}
function addscore(){
    var name=$("name").value;
    var score=parseInt($("score").value);
    names.push(name);
    scores.push(score);
    $("name").value="";
    $("score").value="";
}
function displayr()
{
    var avg=0;
    var hi=0;
    for(var i=0;i<names.length;i++)
    {
        avg=avg+scores[i];
        if(hi<scores[i])
        {
            hi=scores[i];
        }
    }
    avg=avg/scores.length;
    $("results").innerHTML="Average Score: "+avg+"<br>High Score: "+hi;
}
function displays()
{
    var html="<table border=1><th align=left>Name<th align=left>Score";
    for(var i=0;i<names.length;i++)
    {
        html=html+"<tr>";
        html=html+"<td align=left>"+names[i]+"</td>";
        html=html+"<td align=left>"+scores[i]+"</td>";
        html=html+"<td align=left><input type=button value=delete  onclick=dlt('"+ i +"')></td>";
        html=html+"</tr>";
    }
    html=html+"</table>";
    $("score_table").innerHTML=html;
}
function pops()
{
    names.pop();
    scores.pop();
    displays();
    displayr();
}
function dlt(a)
{
    
    names.splice(a,1);
    scores.splice(a,1); 
    displays();
    displayr();
}
window.onload=function(){
    $("add").onclick=addscore;
    $("display_results").onclick=displayr;
    $("display_scores").onclick=displays;
    $("pop").onclick=pops;
};