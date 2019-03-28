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
// ********************