require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const app =express();
const PORT = 8080 || process.env.PORT;
const cors = require('cors');

const userRouter = require('./routes/userRouter');


main().then((res) => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect("mongodb://localhost:27017/sizzlecart")
}

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: "GET, POST, PUT, DELETE"

}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use("/api/user", userRouter);




app.listen(PORT, () => {
    console.log(`App is listening to the port ${PORT}`);
})