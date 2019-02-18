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

// ********************