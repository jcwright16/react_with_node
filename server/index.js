// server/index.js

const express = require("express");

const PORT = ProcessingInstruction.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});