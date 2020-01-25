const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const news = require("./models/News");

const PORT = 5000;
const mongoUrl = "mongodb://mongo:27017/snipfeed";

// Connect to MongoDB
mongoose
  .connect(mongoUrl, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(r => console.log(r));

const app = express();
app.use(cors());

app.get("/news", async (req, res) => {
  const response = await news.find({});
  res.json(
    response.map(n => {
      var result = {};
      result.id = n.id;
      result.type = n.type;
      result.createdAt = n.createdAt;
      result.tags = n.tags;
      return result;
    })
  );
});

app.get("/", (req, res) => {
  res.json("Hello Node.js");
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
