"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var todoController_1 = require("../controllers/todoController");
var router = (0, express_1.Router)();
router.route('/todos').get(todoController_1.getTodos);
exports.default = router;
