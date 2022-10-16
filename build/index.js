"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var images_1 = __importDefault(require("./routes/api/images"));
require('dotenv').config();
var app = (0, express_1.default)();
var PORT = process.env.PORT;
app.get('/', function (req, res) {
    res
        .status(200)
        .send('Your are in the home page to display image go to /api/images');
});
app.use('/api', images_1.default);
app.get('/*', function (req, res) {
    res.status(404).send('Not Found');
});
app.listen(PORT, function () {
    console.log("listening on port ".concat(PORT));
});
exports.default = app;
