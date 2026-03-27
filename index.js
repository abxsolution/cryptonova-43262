const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.get("/health", (req, res) => res.json({ ok: true, project: "Cryptonova" }));
app.get("/", (req, res) => res.send("<h1>Cryptonova — Coming Soon</h1><p>Your crypto social platform is under development.</p>"));
app.listen(PORT, "0.0.0.0", () => console.log("Server running on port " + PORT));