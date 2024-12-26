require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const app =express();
const PORT = 8080 || process.env.PORT;

main().then((res) => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect("mongodb://localhost:27017/sizzlecart")
}


app.get("/demo", (req, res) => {
    res.send("This is Demo just wait ! ");
})




app.listen(PORT, () => {
    console.log(`App is listening to the port ${PORT}`);
})