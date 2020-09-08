"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var recipeController_1 = require("../controller/recipeController");
var app = express_1.default();
var port = 3000;
app.get("/", function (req, res) {
    var str = recipeController_1.find();
    console.log(JSON.stringify(str));
    res.send(str + "Yey, Welcome to Salt & Sugar Company!");
});
app.get("/:tenant", function (req, res) {
    res.send("Welcome to Salt & Sugar Company tenants!");
});
app.listen(port, function () {
    return console.log("server is listening on " + port);
});
