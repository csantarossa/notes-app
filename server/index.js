const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || PORT;

const app = express();

app.listen(PORT, () => console.log(`Running on Port ${PORT}...`));
