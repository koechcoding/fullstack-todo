import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../Services/todo.service';
import { Todo } from '../Interfaces';
import { FilterPipe } from '../Pipes/filter.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule,FilterPipe,RouterModule],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{
  date= new Date()
  next='https://cdn-icons-png.flaticon.com/512/2989/2989988.png'
  todos:Todo[]=[]
  constructor(private todoService:TodoService){}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos=>{
      this.todos= todos 
    })
  }

}
