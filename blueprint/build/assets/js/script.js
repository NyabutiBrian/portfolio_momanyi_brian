// Change the text dynamically
const greetings = ["Hello", "Jambo", "Ciao", "Bonjour", "Привет ", "नमस्ते "];
let currentGreetingIndex = 0;
const h1Element = document.querySelector('#greeting');

function changeGreeting() {
  h1Element.textContent = greetings[currentGreetingIndex];
  currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length;
}
// Call the changeGreeting function to start changing the text
setInterval(changeGreeting, 500); // Change the text every 0.5 seconds

// OVERLAY EFFECT (WELCOME)
gsap.to("#overlay", 2, {
  top: "-120%",
  delay: 2,
  ease: "Expo.easeInOut"
});
// OVERLAY APPEAR ONLY WHEN PAGE IS REFRESHED
document.addEventListener("DOMContentLoaded", function() {
  if (performance.navigation.type === 1) {
    // Page is being loaded for the first time or refreshed
    // Show the overlay
    document.getElementById("overlay").style.display = "flex";
  } else {
    // Page is being navigated to
    // Do not show the overlay
    document.getElementById("overlay").style.display = "none";
  }
});


// FOOTER SECTION
// HIDING && SHOWING FOOTER
let mybutton = document.getElementById("footer-sec");

// When the user scrolls down 600px from the top of the document, show the footer
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// WHATSAPP REDIRECT
function redirectToWhatsApp() {
  const mobileNumber = '254700013897'; // Define your mobile number here
  const url = `https://wa.me/${mobileNumber}`;
  window.open(url, '_blank');
}

// Function to update the local time
function updateLocalTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  // Format hours to 12-hour format with AM/PM
  const formattedHours = hours % 12 || 12;
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Update the HTML with the current time
  const localTimeElement = document.getElementById('localTime');
  localTimeElement.innerHTML = `
      <p>${formattedHours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}</p>
      <p>EAT</p>
  `;
}
// Call the function initially to set the time
updateLocalTime();
// Update the time every second
setInterval(updateLocalTime, 1000);