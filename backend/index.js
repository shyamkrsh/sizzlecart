const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require("mongoose");
const app = express();
const PORT = 8080 || process.env.PORT;
const cors = require('cors');
const cookieParser = require('cookie-parser');
const Product = require('./models/Product');
const TrendingProduct = require('./models/TrendingProduct');
const BestProduct = require('./models/BestProduct');

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
    origin: ["http://localhost:5173", "https://sizzlecartbackend.vercel.app"],
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






app.listen(PORT, () => {
    console.log(`App is listening to the port ${PORT}`);
})