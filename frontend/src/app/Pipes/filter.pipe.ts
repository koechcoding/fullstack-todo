import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../Interfaces';

@Pipe({
  name: 'filter',
  standalone:true,
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter:string): Todo[] {
    if(filter=='' || todos.length===0){
      return todos;
    }else{
      let filteredTodo=[]
      for(let todo of todos){
        if(todo.completed===filter){
          filteredTodo.push(todo)
        }
      }
      return filteredTodo
    }
  }

}
