//Business logic starts here://
function numerals(num) {
  if (!num)
    return false;

  if (+num >=3999)
    return alert("Put numbers inside here")

  var digits = String(+num).split(""),
      data = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VI","VII","VIII","IX"],

      quotes = "",
      i = 3; // only up to 3 numerical places
  while (i--)
      quotes = (data[+digits.pop()+(i*10)] || "") + quotes;
  return Array(+digits.join("") +1).join("M") + quotes;
      }

//UI

$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    $("#output").append("<p>" + numerals($("#input").val())+"</p>");
  });
});
