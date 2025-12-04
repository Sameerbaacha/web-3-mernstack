import express from "express";

const app = express();
const PORT = 3000;

// 1) Home Page
app.get("/", (req, res) => {
    res.send({ message: "Welcome to Home Page" });
});

// 2) About Page
app.get("/about", (req, res) => {
    res.send({ message: "This is About Page" });
});

// 3) Services Page
app.get("/services", (req, res) => {
    res.send({
        message: "Our Services",
        services: ["Web Dev", "Mobile Apps", "AI Work"]
    });
});

// 4) Contact Page
app.get("/contact", (req, res) => {
    res.send({
        email: "skdev@gmail.com",
        phone: "0300-1234567"
    });
});

// 5) Team Page
app.get("/team", (req, res) => {
    res.send({
        leader: "Sameer Khan",
        members: ["Waqas", "Faiz", "Ali"]
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
