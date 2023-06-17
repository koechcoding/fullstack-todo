"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todoContollers_1 = require("../Controllers/todoContollers");
const todoRouter = (0, express_1.Router)();
todoRouter.get('', todoContollers_1.getAllTodos);
todoRouter.post('', todoContollers_1.addTodo);
todoRouter.get('/:id', todoContollers_1.getaTodo);
todoRouter.put('/:id', todoContollers_1.updateTodo);
todoRouter.delete('/:id', todoContollers_1.deleteTodo);
exports.default = todoRouter;
