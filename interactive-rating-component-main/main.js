const rating = document.getElementById("rating");
const thanks = document.getElementById("thanks");
const subbtn = document.getElementById("submit");
const rForm = document.getElementById("rating_form");
const rvalue = document.getElementsByName("ratings");
const rScore = document.getElementById("rat_score");
const val1 = document.getElementById("rating_1");
const val2 = document.getElementById("rating_2");
const val3 = document.getElementById("rating_3");
const val4 = document.getElementById("rating_4");
const val5 = document.getElementById("rating_5");

var i;
function rated(event) {
  var x = 0;
  if (val1.hasAttribute("checked")) {
    i = rvalue[0].value;
    x = 1;
    if (x == 1) {
      rScore.innerHTML = i;
      rating.setAttribute("class", "hide");
      thanks.setAttribute("class", "show");
    }
  }
  if (val2.hasAttribute("checked")) {
    i = rvalue[1].value;
    x = 1;
    if (x == 1) {
      rScore.innerHTML = i;
      rating.setAttribute("class", "hide");
      thanks.setAttribute("class", "show");
    }
  }
  if (val3.hasAttribute("checked")) {
    i = rvalue[2].value;
    x = 1;
    if (x == 1) {
      rScore.innerHTML = i;
      rating.setAttribute("class", "hide");
      thanks.setAttribute("class", "show");
    }
  }
  if (val4.hasAttribute("checked")) {
    i = rvalue[3].value;
    x = 1;
    if (x == 1) {
      rScore.innerHTML = i;
      rating.setAttribute("class", "hide");
      thanks.setAttribute("class", "show");
    }
  }
  if (val5.hasAttribute("checked")) {
    i = rvalue[4].value;
    x = 1;
    if (x == 1) {
      rScore.innerHTML = i;
      rating.setAttribute("class", "hide");
      thanks.setAttribute("class", "show");
    }
  }
  if (x == 0) {
    alert("Please Select A Value On The Form");
    location.reload();
  }
}

function one() {
  val1.setAttribute("checked", "true");
  if (val1.hasAttribute("checked")) {
    val2.removeAttribute("checked");
    val3.removeAttribute("checked");
    val4.removeAttribute("checked");
    val5.removeAttribute("checked");
  }
}

function two() {
  val2.setAttribute("checked", "true");
  if (val2.hasAttribute("checked")) {
    val1.removeAttribute("checked");
    val3.removeAttribute("checked");
    val4.removeAttribute("checked");
    val5.removeAttribute("checked");
  }
}

function three() {
  val3.setAttribute("checked", "true");
  if (val3.hasAttribute("checked")) {
    val2.removeAttribute("checked");
    val1.removeAttribute("checked");
    val4.removeAttribute("checked");
    val5.removeAttribute("checked");
  }
}

function four() {
  val4.setAttribute("checked", "true");
  if (val4.hasAttribute("checked")) {
    val2.removeAttribute("checked");
    val3.removeAttribute("checked");
    val1.removeAttribute("checked");
    val5.removeAttribute("checked");
  }
}

function five() {
  val5.setAttribute("checked", "true");
  if (val5.hasAttribute("checked")) {
    val2.removeAttribute("checked");
    val3.removeAttribute("checked");
    val4.removeAttribute("checked");
    val1.removeAttribute("checked");
  }
}

val1.addEventListener("click", one);
val2.addEventListener("click", two);
val3.addEventListener("click", three);
val4.addEventListener("click", four);
val5.addEventListener("click", five);
subbtn.addEventListener("click", rated);
