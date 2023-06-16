import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', loadComponent:()=> import('./home/home.component').then(c=>c.HomeComponent)},
  {path:'todo', loadComponent:()=> import('./todos/todos.component').then(c=>c.TodosComponent)},
  {path:'addTodo', loadComponent:()=> import('./add-todo/add-todo.component').then(c=>c.AddTodoComponent)},
  {path:'todo/:id', loadComponent:()=> import('./single-todo/single-todo.component').then(c=>c.SingleTodoComponent)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
