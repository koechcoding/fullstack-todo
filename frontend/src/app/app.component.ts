import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  date= new Date()
  next='https://cdn-icons-png.flaticon.com/512/2989/2989988.png'
}
