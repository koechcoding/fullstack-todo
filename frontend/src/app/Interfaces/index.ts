

export interface Todo{
    id:string
    title:string
    description:string,
    completed:string,
    startDate:string
    endDate:string
}

export interface AddTodo{
    title:string
    description:string,
    endDate:string
}

export interface SuccessResponse{
    message:string
}
