import { Request } from "express"

export interface Todo{
    id:string
    title:string
    description:string,
    completed:string,
    startDate:string
    endDate:string
}

export interface AddTodo{
    id:string
    title:string
    description:string,
    endDate:string
}


export interface ExtendedAddInterface extends Request{
body:AddTodo
}

export interface ExtendedUpdateInterface  extends Request{
    body:AddTodo
    params:{id:string}
    }
    

