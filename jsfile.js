// PROJECT MODAL 1 (code is sloppy and redundant here, need to refactor)
const modal1 = document.getElementById('project-modal1');
const span1 = document.getElementById('close1');
const modalBtn1 = document.getElementById('modal-button1');

modalBtn1.onclick = () => modal1.style.display = 'block';
span1.onclick = () => modal1.style.display = 'none';

// PROJECT MODAL 2
const modal2 = document.getElementById('project-modal2');
const span2 = document.getElementById('close2');
const modalBtn2 = document.getElementById('modal-button2');

modalBtn2.onclick = () => modal2.style.display = 'block';
span2.onclick = () => modal2.style.display = 'none';

// PROJECT MODAL 2
const modal3 = document.getElementById('project-modal3');
const span3 = document.getElementById('close3');
const modalBtn3 = document.getElementById('modal-button3');

modalBtn3.onclick = () => modal3.style.display = 'block';
span3.onclick = () => modal3.style.display = 'none';

// Click anywhere else to close the modal
window.onclick = (event) => {
  if (event.target == modal1) modal1.style.display = 'none'
  if (event.target == modal2) modal2.style.display = 'none'
  if (event.target == modal3) modal3.style.display = 'none'
}


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
  const connect = document.getElementById('connect')

  if (emailer.style.display === 'none') {
    emailer.style.display = 'block'
    emailer.scrollIntoView()
  } else {
    emailer.style.display = 'none'
  }
}

// ********************
