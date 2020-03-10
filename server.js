/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
const path = require("path");

const express = require("express");

const port = process.env.PORT || 3000;

const app = express();

const DIST_DIR = path.join(__dirname, "storybook-static");

app.use(express.static(DIST_DIR));

app.get("*", (req, res) => {
  res.sendFile(`${DIST_DIR}/index.html`);
});

app.listen(port, err => {
  if (err) {
    console.error(err);
    return;
  }
  console.info(`[Production] Node app is running on port ${port}`);
});
