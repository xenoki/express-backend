"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var todoController_1 = require("../controllers/todoController");
var router = (0, express_1.Router)();
/** RESTFul API */
router.route('/todos').get(todoController_1.getTodos).post(todoController_1.addTodo).delete(todoController_1.deleteAllTodos);
router.route('/todos/:id').get(todoController_1.getTodosById);
exports.default = router;
