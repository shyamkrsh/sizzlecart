const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require("mongoose");
const app = express();
const PORT = 8080 || process.env.PORT;
const cors = require('cors');
const cookieParser = require('cookie-parser');

const userRouter = require('./routes/userRouter');
const authToken = require('./middlewares/authToken');
const userDetailsController = require('./controllers/userDetails');
const productRouter = require('./routes/productRouter');

let MONGO_URI = process.env.MONGO_URI;

async function main() {
    await mongoose.connect(MONGO_URI);
}
main().then((res) => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log(err);
})

app.use(cors({
    origin: ["http://localhost:5173", "https://sizzlecart.vercel.app", "http://localhost:8080"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/api/user-details", authToken, userDetailsController);
app.use("/api/user", userRouter);
app.use("/api/products", productRouter);

app.get("/demo", (req, res) => {
    res.send("Hello world");
});

// const products = require("./data");
// const Product = require('./models/Product');

// app.get("/api/products", async(req, res) => {
//     for(let i = 0; i < products.length; i++){
//         let newProducts = new Product(products[i]);
//         await newProducts.save().then(() => {
//             console.log("saved");
//         }).catch((err) => {
//             console.log(err);
//         })

//     }
// })




app.listen(PORT, () => {
    console.log(`App is listening to the port ${PORT}`);
})