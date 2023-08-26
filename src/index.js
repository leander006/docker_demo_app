const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
let id = 2;
const data = [
  {
    id: "1",
    title: "Title 1",
    content: "This is content 1",
  },
  {
    id: "2",
    title: "Title 2",
    content: "This is content 2",
  },
];

app.get("/hello", (req, res) => {
  res.status(200).json("hello from docker");
});

app.get("/", (req, res) => {
  res.status(200).json({ data });
});

app.post("/", (req, res) => {
  id = id + 1;
  const title = req.body.title;
  const content = req.body.content;

  const newData = {
    id,
    title,
    content,
  };
  data.push(newData);
  res.status(201).json({ message: "Data added successfully!!!" });
});
app.listen(3001, () => {
  console.log(`Backend runnig on port 3001`);
});
