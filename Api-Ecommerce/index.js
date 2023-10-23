const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./Routes/user")
const authRoute = require("./Routes/auth")
const productRoute = require("./Routes/product")
const CartRoute = require("./Routes/cart")
const OrderRoute = require("./Routes/order")
const StripeRoute = require("./Routes/Stripe")
const cors = require("cors")
dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Db Connxn successful"))
    .catch((err) => {
        console.log(err)
    });
app.use(cors())
app.use(express.json());
app.get("/api/test", () => { console.log("test is succs") });
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", CartRoute);
app.use("/api/order", OrderRoute);
app.use("/api/checkout", StripeRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("backend server is running")
});
