"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
var morgan_1 = __importDefault(require("morgan"));
var bodyParser = require("body-parser");
var mongoose_1 = __importDefault(require("mongoose"));
var open_weather_1 = require("./data/open-weather");
var todoRoutes_1 = __importDefault(require("./routes/todoRoutes"));
dotenv_1.default.config();
var app = (0, express_1.default)();
/** Express Middleware Setup */
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use(helmet_1.default.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use((0, morgan_1.default)('common'));
app.use(express_1.default.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
/** ROUTES */
app.get('/', function (req, res) {
    res.status(200).send({ data: 'hello world version 1.0' });
});
app.use(todoRoutes_1.default);
/** Request Using Query Parameters */
app.get('/weather/:city/:zipcode', function (req, res) {
    var params = req.params, query = req.query, body = req.body;
    res.status(200).send(open_weather_1.London);
});
/** Request Using Query String */
app.get('/weather', function (req, res) {
    var params = req.params, query = req.query, body = req.body;
    res.status(200).send(open_weather_1.London);
});
/** MONGOOSE SETUP */
var PORT = process.env.PORT || 3001;
mongoose_1.default
    .connect(process.env.MONGO_URI)
    .then(function () {
    console.log("connected to ".concat(process.env.MONGO_URI));
    app.listen(PORT, function () {
        return console.log("express api server listening on port:".concat(PORT));
    });
})
    .catch(function (error) { return console.log("".concat(error, " did not connect")); });
