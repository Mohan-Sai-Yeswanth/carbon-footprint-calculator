document.getElementById("carbon-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Calculate the carbon footprint based on user input
    const transportation = parseFloat(document.getElementById("transportation").value);
    const energy = parseFloat(document.getElementById("energy").value);
    const diet = parseFloat(document.getElementById("diet").value);

    const carbonFootprint = transportation + energy + diet;

    // Display the calculated result in the HTML
    document.getElementById("carbon-result").textContent = carbonFootprint.toFixed(2) + " kg CO2/year";

    // Trigger pop-up notifications based on the carbon footprint value
    if (carbonFootprint <= 10) {
        showNotification("Great job! Your carbon footprint is low.");
    } else if (carbonFootprint > 10 && carbonFootprint <= 20) {
        showNotification("Your carbon footprint is moderate. Consider reducing it.");
    } else {
        showNotification("Your carbon footprint is high. Explore ways to reduce it.");
    }
});

function showNotification(message) {
    const notification = document.createElement("div");
    notification.classList.add("notification");
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 5000); // Remove the notification after 5 seconds
}
