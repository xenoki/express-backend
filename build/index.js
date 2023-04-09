"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var PORT = process.env.PORT || 3001;
var app = (0, express_1.default)();
app.get('/', function (req, res) {
    res.status(200).send({ data: 'hello world' });
});
app.listen(PORT, function () {
    console.log('Express backend server running on port:', PORT);
});
