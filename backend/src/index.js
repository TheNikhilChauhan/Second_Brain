"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var route_1 = require("./routes/route");
var db_1 = require("./config/db");
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var app = (0, express_1.default)();
var PORT = process.env.PORT;
(0, db_1.dbConnect)();
app.use(express_1.default.json());
app.use("api/v1/user", route_1.default);
app.listen(PORT, function () {
    console.log("The server is running at port: ".concat(PORT));
});
