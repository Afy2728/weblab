function pluralise(noun, number) {
  if (number != 1 && noun != 'sheep' && noun != 'geese') {
    return number + ' ' + noun + 's'
  } else {
    return number + ' ' + noun;
  }
}
var noun = prompt("Noun: ")
var number = parseInt(prompt("Number: "), 0)
var ans = pluralise(noun, number);
document.getElementById("res").innerHTML = ans;
