import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TodoService } from '../Services/todo.service';
import { AddTodo } from '../Interfaces';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [CommonModule, RouterModule,ReactiveFormsModule],
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

  constructor(private fb:FormBuilder , private router:Router ,private todoService:TodoService){}
  successMessage:string|null=null
  errorMessage:string|null=null

  form = this.fb.group({
    title:['', Validators.required],
    endDate:['',Validators.required ],
    description:['', Validators.required]
  })

  onSubmit(){
      let x:AddTodo= this.form.value as AddTodo
     this.todoService.addTodo(x).subscribe(res=>{
      this.successMessage=res.message
      setTimeout(()=>{
          this.successMessage=null
          this.router.navigate(['/todo'])
      },2000)
     },err=>{
      this.errorMessage=err
     })
  }
}
