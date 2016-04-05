var var1 = '';
var var2 = '';
var answer = '';

document.getElementById("calculate-button").addEventListener("click", function(eventClick){
  eventClick.preventDefault();
  var1 = document.querySelector('#value-one').value;
  var2 = document.querySelector('#value-two').value;
  answer = Number(var1) + Number(var2);
  document.querySelector('#answer').textContent = answer;
});
