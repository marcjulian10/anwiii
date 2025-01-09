const generateEventBtn = document.getElementById("generateEventBtn");
const nextPageBtn = document.getElementById("nextPageBtn");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventTime = document.getElementById("eventTime");
const calendarLink = document.getElementById("calendarLink");

// Get the activity from the previous page
const activity = localStorage.getItem("selectedActivity");
eventTitle.value = activity;

// Lock the date to February 14, 2025
eventDate.value = "2025-02-14";

generateEventBtn.addEventListener("click", () => {
    const date = eventDate.value;  // Always "2025-02-14"
    const time = eventTime.value;

    if (!time) {
        alert("Please select a time.");
        return;
    }

    const startDateTime = new Date(`${date}T${time}:00`);
    const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000); // 1 hour event duration

    const startDate = startDateTime.toISOString().replace(/[-:]/g, "").split(".")[0];
    const endDate = endDateTime.toISOString().replace(/[-:]/g, "").split(".")[0];

    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle.value)}&dates=${startDate}/${endDate}&details=${encodeURIComponent("Activity scheduled for a special day")} &sf=true&output=xml`;

    calendarLink.innerHTML = `<a href="${googleCalendarUrl}" target="_blank">Click here to add this event to your Google Calendar</a>`;
});

nextPageBtn.addEventListener("click", () => {
    // Save the event details to localStorage so that it's available on the reminder page
    const time = eventTime.value;
    const activity = eventTitle.value;

    localStorage.setItem("eventTime", time);
    localStorage.setItem("eventActivity", activity);
    
    // Redirect to reminder page
    window.location.href = "reminder.html";
});
