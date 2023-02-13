const express = require("express");
const { inherits } = require("util");
const app = express();
const port = 3000;


app.get("/add/:numbers", (req, res) => {
    const numbers = req.params.numbers.split(",");
    const sum = numbers.reduce((accumulator, currentValue) => {
      return accumulator + parseInt(currentValue);
    }, 0);
    res.send(`The sum of the numbers is ${sum}`);
  });

  app.get("/multiply/:numbers", (req, res) => {
    const numbers = req.params.numbers.split(",");
    const product = numbers.reduce((accumulator, currentValue) => {
      return accumulator * parseInt(currentValue);
    }, 1);
    res.send(`The product of the numbers is ${product}`);
  });

app.listen(port, () => {
  console.log(`Calculator app listening at http://localhost:${port}`);
});
