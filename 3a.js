function myfunc(){
var amount = parseFloat(prompt("Amount: "), 0)
var taxp =  parseFloat(prompt("tax: "), 0)

function infunc(){
	amount = amount + amount*taxp;
  return amount;
}

return infunc;
}

c = myfunc()
var ans = c();
document.getElementById("res").innerHTML= ans;
