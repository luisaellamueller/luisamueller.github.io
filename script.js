const noButton = document.getElementById("noButton");

// Add an event listener for when the mouse hovers over the "No" button
noButton.addEventListener("mouseover", function() {
    // Generate random positions for the button
    const randomX = Math.floor(Math.random() * (window.innerWidth - 100));
    const randomY = Math.floor(Math.random() * (window.innerHeight - 50));
    
    // Apply the new positions to the button
    noButton.style.position = "absolute";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
});

// Add a click event for the "Yes" button
document.getElementById("yesButton").addEventListener("click", function() {
    document.getElementById("dateModal").style.display = "flex";
});

// Add a click event for the "Confirm" button
document.getElementById("confirmButton").addEventListener("click", function() {
    const activity = document.getElementById("activity").value;
    const time = document.getElementById("time").value;

    if (activity && time) {
        alert(`Great! We're going for a ${activity} at ${time}. Can't wait! ❤️`);
        document.getElementById("dateModal").style.display = "none";
    } else {
        alert("Please select both an activity and a time.");
    }
});
