function myfunc()
{
    var num=parseFloat(prompt("Enter a number: ",0));
    var num=Math.trunc(num);

    if(num>=1 && num<=12)
    {
        function inFunc()
        {
            var months=['Jan','Feb','Mar','April','May','June','July','Aug','sept','oct','nov','dec'];
            return months[num-1];

        }
    }
    else
    {
        return "Bad Number";
    }

    return inFunc;

}

c=myfunc();
if(c==="Bad Number")
	document.getElementById("res").innerHTML = "bad number"
else{
var ans=c();
document.getElementById("res").innerHTML=ans;
}
