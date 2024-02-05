const express = require("express");
const app = express();
const Shows = require("./model/Shows.js");

app.use(express.urlencoded({ extended: false }));

app.use("/static", express.static(__dirname + "/static"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/static/index.html");
});

app.get("/list", (req, res) => {
  async function sortData() {
    let sortList;
    for (let i = 0; i < Shows.length - 1; i++) {
      const doc = await Shows.find({}).sort({ total: -1 });
      sortList = doc;
    }
    res.json(sortList);
  }
  sortData();
});

app.post("/", function (req, res) {
  let formResponse = new Shows({
    showName: req.body.show,
    date: req.body.date,
    showLocation: req.body.showLocation,
    songRank: req.body.songs,
    plotRank: req.body.plot,
    castRank: req.body.cast,
    boredomRank: req.body.bored,
    technicalRank: req.body.tech,
    originalityRank: req.body.originality,
    memorabilityRank: req.body.memorability,
    gutRank: req.body.gut,
    total: req.body.total,
  });

  formResponse.save();

  res.redirect("/");
});

app.get("/request", (req, res) => {
  async function getShow() {
    const doc = await Shows.findOne({
      showName: "Sweeney Todd: The Demon Barber of Fleet Street",
    });
    console.log(doc.showName);
    res.json(doc);
  }
  getShow();
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
