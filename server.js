const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like your HTML, CSS, and JS)
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to save booking data
app.post('/saveBooking', (req, res) => {
    const bookingData = req.body;

    // Read existing bookings from db.json
    fs.readFile('db.json', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading database');
        }

        let bookings = [];
        if (data.length) {
            bookings = JSON.parse(data);
        }

        // Add new booking to the array
        bookings.push(bookingData);

        // Write updated bookings back to db.json
        fs.writeFile('db.json', JSON.stringify(bookings, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error saving booking');
            }
            res.status(200).json({ message: 'Booking saved successfully!' });
        });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});