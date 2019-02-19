// PROJECT MODAL
const modal = document.getElementById('project-modal');
const span = document.getElementsByClassName('close')[0];

const modalBtn = document.getElementById('modal-button');
const modalBtn2 = document.getElementById('modal-button2');
const modalBtn3 = document.getElementById('modal-button3');

modalBtn.onclick = () => modal.style.display = 'block';
modalBtn2.onclick = () => modal.style.display = 'block';
modalBtn3.onclick = () => modal.style.display = 'block';

span.onclick = () => modal.style.display = 'none';

window.onclick = () => 
  event.target == modal ? modal.style.display = 'none' : null


// RETURN TO TOP BUTTON
window.onscroll = () => scrollFunction();

const scrollFunction = () => {
  const body = document.body.scrollTop
  const element = document.documentElement.scrollTop
  const topBtn = document.getElementById("topButton")

  if (body > 20 || element > 20) { topBtn.style.display = "block";} 
  else { topBtn.style.display = "none"; }
}

function topFunction() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
}

/* HIDE / SHOW EMAIL FORM */
const toggleEmail = () => {
  const emailer = document.getElementById('emailer')
  const connect = document.getElementById('connect')
  
  if (emailer.style.display === 'none') {
    emailer.style.display = 'block'
    emailer.scrollIntoView()
  } else {
    emailer.style.display = 'none'
  }
}

// ********************
