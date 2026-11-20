const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
        <h1>Hello SAP BTP Cloud Foundry!</h1>
        <p>My first CF application.</p>
        <p>alert Notification  </p>
    `);
});

app.get("/health", (req, res) => {
    res.json({
        status: "UP",
        timestamp: new Date()
    });
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});