var rating = document.getElementById("rating");
var thanks = document.getElementById("thanks");
var btn = document.getElementById("submit");

var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");

function onev(){
    thanks.childNodes[3].outerHTML = "<p>You selected 1 out of 5</p>"
    thanks.childNodes[3].setAttribute("class", "board");
}

function twov(){
  thanks.childNodes[3].outerHTML = "<p>You selected 2 out of 5</p>"
  thanks.childNodes[3].setAttribute("class", "board");
}

function threev(){
  thanks.childNodes[3].outerHTML = "<p>You selected 3 out of 5</p>"
  thanks.childNodes[3].setAttribute("class", "board");
}

function fourv(){
  thanks.childNodes[3].outerHTML = "<p>You selected 4 out of 5</p>"
  thanks.childNodes[3].setAttribute("class", "board");
}

function fivev(){
  thanks.childNodes[3].outerHTML = "<p>You selected 5 out of 5</p>"
  thanks.childNodes[3].setAttribute("class", "board");
}

function rated() {
  rating.removeAttribute("class", "show");
  thanks.removeAttribute("class", "hide");
  rating.setAttribute("class", "hide");
  thanks.setAttribute("class", "show");
}

btn.addEventListener("click", rated);
one.addEventListener("click", onev);
two.addEventListener("click", twov);
three.addEventListener("click", threev);
four.addEventListener("click", fourv);
five.addEventListener("click", fivev);