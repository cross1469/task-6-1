const express = require("express");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  res.send({
    task: "6-1 pipeline test",
  });
});

app.get("/addTwoNumbers", async (req, res) => {
  const { a, b } = req.query;

  const num1 = parseInt(a, 10);
  const num2 = parseInt(b, 10);

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    return res.status(400).send({ error: "Invalid input numbers" });
  }

  const result = parseInt(a, 10) + parseInt(b, 10);

  return res.send({
    result,
  });
});

module.exports = app;
