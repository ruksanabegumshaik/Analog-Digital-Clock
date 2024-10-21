function updateClock() {
    const now = new Date();
    let second = now.getSeconds();
    let minute = now.getMinutes();
    let hour = now.getHours();
    let period = 'AM';  // Default period is AM

    // Handle AM/PM for the digital clock
    if (hour >= 12) {
        period = 'PM';  // Change to PM after midday
    }
    if (hour > 12) {
        hour = hour - 12;  // Convert to 12-hour format for the digital clock
    }
    if (hour === 0) {
        hour = 12;  // Show midnight as 12 AM
    }

    // Analog Clock Calculations
    const secondDeg = (second / 60) * 360;  // 360 degrees = full rotation, 60 seconds
    const minuteDeg = (minute / 60) * 360 + (second / 60) * 6;  // Adjust minute hand based on second progress
    const hourDeg = ((now.getHours() % 12) / 12) * 360 + (minute / 60) * 30;  // Adjust hour hand based on minute progress

    // Apply rotations to the analog clock hands
    document.getElementById('second').style.transform = `rotate(${secondDeg}deg)`;
    document.getElementById('minute').style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById('hour').style.transform = `rotate(${hourDeg}deg)`;

    // Digital Clock
    const digitalClock = document.getElementById('digital-clock');
    const formattedTime = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')} ${period}`;
    digitalClock.textContent = formattedTime;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initialize the clock on page load
updateClock();
