// FOOTER
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