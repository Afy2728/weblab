[9:44 pm, 11/7/2024] Ajay Cse: function myfunc()
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
var ans=c();

document.getElementById("res").innerHTML=ans;
