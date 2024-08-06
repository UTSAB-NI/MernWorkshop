const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/users", (req, res) => {
  try {
    const { name, age } = req.body;
    res.status(200).send(name + age);
  } catch (error) {
    res.status(400).send("Request body is missing");
  }
});


app.get("/users/:id", (req, res) => {

  

});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
