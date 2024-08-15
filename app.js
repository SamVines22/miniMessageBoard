const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");

app.use(express.urlencoded({ extended: true }));
app.use("/new", newRouter);
app.use("/", indexRouter);


app.set("views", path.join(__dirname,"./views"));
app.set("view engine", "ejs");


app.listen(PORT, ()=> console.log(`port open on ${PORT}`));