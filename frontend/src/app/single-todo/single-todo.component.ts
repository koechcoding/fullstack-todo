import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { TodoService } from '../Services/todo.service';
import { Todo } from '../Interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-todo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.css']
})
export class SingleTodoComponent implements OnInit {
  date= new Date()
  next='https://cdn-icons-png.flaticon.com/512/2989/2989988.png'
  todo!:Todo
  successMessage!:string| null
  constructor(private router :Router, private route:ActivatedRoute, private todoService:TodoService){}

  ngOnInit(): void {
    this.route.params.subscribe((p:Params)=>{
      // this.todo=this.todoService.getTodo(p['id'])
      this.todoService.getTodo(p['id']).subscribe(res=>{
        console.log(res);
        this.todo=res
        
      })
    })
    console.log(this.todo);
    
  }

  onDelete(id:string){
    this.todoService.delete(id).subscribe(res=>{
      this.successMessage= res.message

      setTimeout(()=>{
        this.todoService.getTodos().subscribe()
        this.router.navigate(['/todo'])
        this.successMessage=null
      },2000)
    })
  
  }
}
