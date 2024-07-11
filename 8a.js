
function vowel(str){

const vowels = ['a', 'e', 'i', 'o','u']
const counts ={a: 0, e:0, i:0, o:0, u:0};


for(let char of str.toLowerCase()){
if(vowels.includes(char)){
counts[char]++;
}
}
return counts;
}

function submitText(){
var str = document.getElementById("text").value;
var ans = vowel(str);
document.getElementById("res").innerHTML = JSON.stringify(ans);
}



