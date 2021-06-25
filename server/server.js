require("dotenv").config({ path: "./config.env" });
const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");

const path = require("path");

// Connexion à la BDD
connectDB();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));

// ... other app.use middleware
app.use(express.static(path.join(__dirname, "./client", "build")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Error handler doit être le middleware placé en dernier
app.use(errorHandler);

const server = app.listen(PORT, () =>
	console.log(`Server running on port ${PORT}`)
);

// Permet de fermer le serveur en cas de promesse rejetée et d'afficher un message d'erreur plus lisible : https://nodejs.org/api/process.html#process_event_unhandledrejection
process.on("unhandledRejection", (err, promise) => {
	console.log(`Logged Error: ${err}`);
	server.close(() => process.exit(1));
});
