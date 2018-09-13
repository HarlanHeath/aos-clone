const express = require("express");
const bodyParser = require("body-parser");

const port = 3030;
const app = express();

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`I am listening on port ${port}`);
});
