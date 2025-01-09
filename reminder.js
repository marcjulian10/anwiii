const reminderMessage = document.getElementById("reminderMessage");
const countdownDisplay = document.getElementById("countdown");

// Retrieve event details from localStorage
const eventActivity = localStorage.getItem("eventActivity");
const eventTime = localStorage.getItem("eventTime");

// Display the reminder message
reminderMessage.textContent = `Our Valentine's date is scheduled for ${eventTime}.`;

// Function to update the countdown
function updateCountdown() {
    const currentDateTime = new Date();
    
    // Set the target date and time for the activity (February 14, 2025, with user selected time)
    const [hours, minutes] = eventTime.split(":");
    const targetDate = new Date("2025-02-14T" + eventTime + ":00");
    
    // Calculate the remaining time
    const remainingTime = targetDate - currentDateTime;
    
    // If time is up or passed
    if (remainingTime <= 0) {
        countdownDisplay.textContent = "Time's up!";
        clearInterval(countdownInterval); // Stop the countdown
    } else {
        const daysRemaining = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hoursRemaining = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesRemaining = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const secondsRemaining = Math.floor((remainingTime % (1000 * 60)) / 1000);
        
        // Update the countdown display
        countdownDisplay.textContent = `${daysRemaining} days ${hoursRemaining} hours ${minutesRemaining} minutes ${secondsRemaining} seconds remaining until our date hihihihi.  See youuu, wabwabbb! 🥰`;
    }
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);
const bgMusic = document.getElementById('bgMusic1');
    bgMusic.muted = false; // Unmute after autoplay starts
    bgMusic.volume = 0.1;