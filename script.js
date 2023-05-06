function pressNumber(value)
{
  var input=document.querySelector(".input");
  input.innerText+=value;
  calculate();
}

function calculate()
{
  var input=document.querySelector(".input");
  document.querySelector(".output").innerText=(eval(input.innerText))
}

function backSpace()
{
  var input=document.querySelector(".input");
  var data=input.innerText;
  data=data.substr(0,data.length-1);
  input.innerText=data;
  calculate();


}