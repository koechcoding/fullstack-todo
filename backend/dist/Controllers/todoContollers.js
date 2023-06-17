"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.addTodo = exports.getaTodo = exports.getAllTodos = void 0;
const DatabaseHelper_1 = require("../DatabaseHelper");
const uuid_1 = require("uuid");
const getAllTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let todos = yield (yield DatabaseHelper_1.DatabaseHelper.exec('getTodos')).recordset;
    res.status(200).json(todos);
});
exports.getAllTodos = getAllTodos;
const getaTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    let todo = yield (yield DatabaseHelper_1.DatabaseHelper.exec('getTodo', { id })).recordset;
    if (todo.length) {
        return res.status(200).json(todo[0]);
    }
    return res.status(404).json({ message: 'Todo Not Found' });
});
exports.getaTodo = getaTodo;
const addTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { title, description, endDate } = req.body;
    const id = (0, uuid_1.v4)();
    yield DatabaseHelper_1.DatabaseHelper.exec('insertTodos', { id, title, description, endDate });
    res.status(200).json({ message: "Todo added successfully..." });
});
exports.addTodo = addTodo;
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { title, description, endDate } = req.body;
    const id = req.params.id;
    let todo = yield (yield DatabaseHelper_1.DatabaseHelper.exec('getTodo', { id })).recordset;
    if (!todo.length) {
        return res.status(404).json({ message: 'Todo Not Found' });
    }
    yield DatabaseHelper_1.DatabaseHelper.exec('UpdateTodo', { id, title, description, endDate });
    return res.status(200).json({ message: "Todo Updated successfully..." });
});
exports.updateTodo = updateTodo;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    let todo = yield (yield DatabaseHelper_1.DatabaseHelper.exec('getTodo', { id })).recordset;
    if (!todo.length) {
        return res.status(404).json({ message: 'Todo Not Found' });
    }
    yield DatabaseHelper_1.DatabaseHelper.exec('deleteTodo', { id });
    return res.status(200).json({ message: "Todo Deleted  successfully..." });
});
exports.deleteTodo = deleteTodo;
