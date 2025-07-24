import { Component,Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  imports: [],
  standalone:true,
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
 @Input() name?:string ;
 //either name is string or undefined
 //TasksComponent is imported to app.component.ts
}
