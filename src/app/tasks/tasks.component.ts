import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
 @Input() name?:string ;
 //either name is string or undefined
 //TasksComponent is imported to app.component.ts
}
