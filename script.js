// Function to handle the conference button click
function joinConferenceCall() {
    // Add your code here to join the conference call
    window.location.href = "https://meet.google.com/yon-nhtj-bnz"; // Replace with your conference call link
  }
  
  // Function to handle the WhatsApp button click
  function joinWhatsAppGroup() {
    // Add your code here to join the WhatsApp group
    window.location.href = "https://chat.whatsapp.com/FqDqJFRaNh58qa4LqL5iJz"; // Replace with your WhatsApp group link
  }
  
  // Attach click event listeners to the buttons
  document.getElementById("conferenceButton").addEventListener("click", joinConferenceCall);
  document.getElementById("whatsappButton").addEventListener("click", joinWhatsAppGroup);

  
  // count down

  function countdown() {
    const endDate = new Date("June 8, 2023 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = endDate - now;
  
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  
    if (timeLeft < 0) {
      clearInterval(countdownInterval);
      document.getElementById("days").innerHTML = "0";
      document.getElementById("hours").innerHTML = "0";
      document.getElementById("minutes").innerHTML = "0";
      document.getElementById("seconds").innerHTML = "0";
    }
  }
  
  const countdownInterval = setInterval(countdown, 1000);
  