import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send({ message: "Hello via Bun!" });
});

app.post("/user", (req, res) => {
  res.send({ message: "user created!" });
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
