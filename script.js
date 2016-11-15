var total=0;
function update () {
    var count=document.getElementById("count").innerHTML;
    var update=document.getElementById("textbox").value.length;
    count=150-update-total;
    document.getElementById("count").innerHTML=count;
    if(count<150-total)
    {
    document.getElementById("tweet").disabled=false;    
    }
    else
    {
    document.getElementById("tweet").disabled=true;      
    }  
    if(document.getElementById("count").innerHTML<0)
    {
    document.getElementById("notification").value="Limit Exceeded from text:- "+document.getElementById("textbox").value.slice(150-total);
    }
    else
    {
    document.getElementById("notification").value="";
    }
}
function update2 () {
    var count=document.getElementById("count").innerHTML;
    if(count>20 && document.getElementById("image").innerHTML=="Add Image" ){
    total=total+20;
    count=count-20;
    document.getElementById("count").innerHTML=count;
    document.getElementById("image").innerHTML="Image Added!";
    }
    else if(count<20){
    document.getElementById("notification").value="No space left to Add Image!";
    }
    else if(document.getElementById("image").innerHTML=="Image Added!" )
    {
    count=parseInt(count)+20;
    total=total-20;
    document.getElementById("count").innerHTML=count;
    document.getElementById("image").innerHTML="Add Image";
    }
}