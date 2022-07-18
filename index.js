const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
require("dotenv").config();
const axios = require("axios").default;

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("combined"));
app.use(helmet());

app.get("/", async (req, res) => {
  try {
    console.log(process.env.CKR_API_SECRET);
    const result = await axios.get("https://api.checkr.com/v1/account", {
      auth: {
        username: process.env.CKR_API_SECRET,
      },
    });
    res.json(result.data);
  } catch (e) {
    console.log(e);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
