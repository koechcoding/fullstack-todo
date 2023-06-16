import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddTodo, SuccessResponse, Todo } from '../Interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor( private http :HttpClient) { }

  getTodos():Observable<Todo[]>{
      return this.http.get<Todo[]>('http://localhost:4000/todo')
  }

  getTodo( id:string):Observable<Todo>{   
    return this.http.get<Todo>(`http://localhost:4000/todo/${id}`)
}

  addTodo(  newTodo:AddTodo):Observable<SuccessResponse>{
      return this.http.post<SuccessResponse>('http://localhost:4000/todo', newTodo)
  }

  update( id:string ,updateTodo:AddTodo):Observable<SuccessResponse>{
    return this.http.put<SuccessResponse>('http://localhost:4000/todo', updateTodo)
  }

  delete(id:string ):Observable<SuccessResponse>{
    return this.http.delete<SuccessResponse>(`http://localhost:4000/todo/${id}`)
  }

}
