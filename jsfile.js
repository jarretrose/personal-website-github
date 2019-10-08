// RETURN TO TOP BUTTON
window.onscroll = () => scrollFunction();

const scrollFunction = () => {
  const body = document.body.scrollTop
  const element = document.documentElement.scrollTop
  const topBtn = document.getElementById("topButton")

  if (body > 20 || element > 20) { topBtn.style.display = "block"; }
  else { topBtn.style.display = "none"; }
}

function topFunction() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
}

/* HIDE / SHOW EMAIL FORM */
const toggleEmail = () => {
  const emailer = document.getElementById('emailer')
  const connect = document.getElementById('_connect')

  if (emailer.style.display === 'none') {
    emailer.style.display = 'block'
    emailer.scrollIntoView({behavior: 'smooth'})
  } else {
    emailer.style.display = 'none'
    connect.scrollIntoView(false, {behavior: 'smooth'})
  }
}

// Filter / Show Skills
filterSelection("all")

function filterSelection(c) {
  let x, i;
  x = document.getElementsByClassName("individual-skill");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

// Show filtered skills
function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1); 
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("skill-btns");
var btns = btnContainer.getElementsByClassName("skill-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
