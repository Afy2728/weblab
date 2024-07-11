function fs(){

    monthNames = ["jan", "feb", "march", "april", "may", "june"]
    let result = ""
    var num = document.getElementById("num").value;
    if(isNaN(num)	||	num<1||	num>6){
         result = "Bad number"
    }
    else{
        num = Math.floor(num)
      result	= monthNames[num-1];
    }
    document.getElementById("result").innerHTML=result;
    }
