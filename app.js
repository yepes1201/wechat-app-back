require("dotenv").config();
const express = require("express");
const cors = require("cors");
const port = process.env.PORT;

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

app.listen(port, () => console.log(`Server running on ${port}`));
