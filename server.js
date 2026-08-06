const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Booking = require("./models/Booking");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://vaishnavimohan1409_db_user:Vaishu1409@cluster0.fcpvxv1.mongodb.net/HotelBooking?appName=Cluster0")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("Hotel Booking Backend Running");
});

app.post("/book", async (req, res) => {
    try {
        const booking = new Booking(req.body);
        await booking.save();

        res.status(201).json({
            message: "Booking saved successfully!"
        });

    } catch (error) {
        res.status(500).json({
            message: "Error saving booking"
        });
    }
});

app.get("/api/test", (req, res) => {
    res.send("Backend Connected Successfully");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});