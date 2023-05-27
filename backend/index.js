const cors = require("cors");

const connectToMongo = require("./db");
connectToMongo();

const morgan = require("morgan");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const path = require("path");
//
// const product = require("./routes/productRoute");
const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.static(path.join(__dirname, "../build")));
// app.use(express.static("E:/project/House-Rent/build"));

//Available Routes
// app.use("*", function (req, res) {
//   req.sendFile(path.join(__dirname, "./build/index.html"));
// });
app.use("/api/auth", require("./routes/auth"));
// app.use("/api/roomdesc", require("./routes/roomdesc"));
// app.use("/api/products", require("./routes/products"));

app.use("/api/category", categoryRoutes);
app.use("/api/product", productRoutes);

app.listen(port, () => {
  console.log(`House-Rent backend running at http://localhost:${port}`);
});
