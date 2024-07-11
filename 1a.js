function myfunc()
{
    var text = document.getElementById("inText").value;
    var result="";
    var vowels=['a','e','i','o','u'];

    for(let i=0;i<text.length;i++)
    {
        element=text[i];

        if(element===" ")
        {
            result+=" ";
        }
        else if(vowels.includes(element))
        {
            result+=text[i];
        }
        else
        {
            result+=text[i]+"o"+text[i];
        }
    }


    document.getElementById("result").innerHTML=result;
}
