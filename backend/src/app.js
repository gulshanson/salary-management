const express = require("express");
const app = express();

app.use(express.json());

app.use("/employees", require("./routes/employeeRoutes"));
app.use("/insights", require("./routes/insightRoutes"));

module.exports = app;


