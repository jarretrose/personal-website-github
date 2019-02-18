// PROJECT MODAL
const modal = document.getElementById('project-modal');
const span = document.getElementsByClassName('close')[0];

const btn = document.getElementById('modal-button');
const btn2 = document.getElementById('modal-button2');
const btn3 = document.getElementById('modal-button3');

btn.onclick = () => modal.style.display = 'block';
btn2.onclick = () => modal.style.display = 'block';
btn3.onclick = () => modal.style.display = 'block';

span.onclick = () => modal.style.display = 'none';

window.onclick = () => 
  event.target == modal ? modal.style.display = 'none' : null


// RETURN TO TOP BUTTON
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topButton").style.display = "block";
  } else {
    document.getElementById("topButton").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// ********************
