require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const contactRoute = require("./route/contactRoute");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", contactRoute);

if (process.env.NODE_ENV === "production") {
    // Correctly point to the build folder where all static files should be.
    app.use(express.static("client/build"));

    // Serve the index.html file if no other route handles the HTTP request.
    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    );
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listening on port ${port} only`));