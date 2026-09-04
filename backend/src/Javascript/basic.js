
const express = require("express");

const app = express();

app.use(express.json());

// Basic employee data
const employees = [
    {
        id: 1,
        name: "Anil",
        phone: "9876543210",
        address: "Tirupati",
        interests: "Coding",
        appUsed: "WhatsApp"
    },
    {
        id: 2,
        name: "Ravi",
        phone: "9876501234",
        address: "Chennai",
        interests: "Cricket",
        appUsed: "Instagram"
    },
    {
        id: 3,
        name: "Kiran",
        phone: "9123456780",
        address: "Bangalore",
        interests: "Music",
        appUsed: "YouTube"
    }
];

// Test API
app.get("/", (req, res) => {
    res.send("Employee Backend is running");
});

// Get all employees
app.get("/employees", (req, res) => {
    res.json(employees);
});

app.listen(3000, () => {
    console.log("Backend running on http://localhost:3000");
});