"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userRouter = express_1.default.Router();
userRouter.post("/signup", function (req, res) { });
userRouter.post("/signin", function (req, res) { });
exports.default = userRouter;
