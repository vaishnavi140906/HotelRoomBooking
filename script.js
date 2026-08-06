// Scroll to booking section
function scrollToBooking() {
    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });
}

// Select room
const roomButtons = document.querySelectorAll(".card button");

roomButtons.forEach(button => {
    button.addEventListener("click", function () {
        const roomName = this.parentElement.querySelector("h3").textContent;
        document.getElementById("room").value = roomName;
        scrollToBooking();
    });
});

// Booking form submission
document.getElementById("bookingForm").addEventListener("submit", async function (event) {

    event.preventDefault();

    const bookingData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        checkIn: document.getElementById("checkIn").value,
        checkOut: document.getElementById("checkOut").value,
        room: document.getElementById("room").value,
        guests: document.getElementById("guests").value
    };

    try {
        const response = await fetch("http://localhost:3000/book", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bookingData)
        });

        const result = await response.json();

        alert(result.message);

        document.getElementById("bookingForm").reset();

    } catch (error) {
        alert("Failed to connect to the server.");
    }
});