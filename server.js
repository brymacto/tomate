var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/src/index.html");
});

app.listen(3000, function () {
  console.log("Tomate listening on 3000");
});
