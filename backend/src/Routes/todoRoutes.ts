
import { Router } from "express";
import { addTodo, deleteTodo, getAllTodos, getaTodo, updateTodo } from "../Controllers/todoContollers";
const todoRouter = Router()

todoRouter.get('',getAllTodos)
todoRouter.post('',addTodo)
todoRouter.get('/:id',getaTodo)
todoRouter.put('/:id',updateTodo)
todoRouter.delete('/:id',deleteTodo)

export default todoRouter