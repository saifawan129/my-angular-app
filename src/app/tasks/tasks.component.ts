import { Component,Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Showw } from './tasks.model';
import { NewTaskComponent} from '../new-task/new-task.component';
import { type NewTaskData } from './task/task.model';
import { TaskService } from './tasks.service';



@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent,NewTaskComponent]
})
export class TasksComponent {

  @Input({required:true}) userId! : string;
  @Input({required:true}) name!: string;
  isAddingTask = false;
 
  constructor (private taskService:TaskService){
    
  }
 
showAddTask: any;
  //the code for complete task button
    get selectedUserTasks() {
    return this.taskservice.getUserTasks(this.userId)
  }
  onCompleteTask(id:string) {
    
  }

  //random task i am adding for myself assesments
  namee: string = 'User'; // Replace with dynamic user name if needed
  OnShowUser: Showw[] = [
    { id: 1, name: 'show number 1' },
    { id: 2, name: 'show number 2' },
  ];
  nextTaskId: string[] = ['khan','malik','awan'];

  addShow() {
    this.tasks.push({
      id: this.nextTaskId.toString(),
      userId: this.userId,
      title: `Task ${this.nextTaskId}`,
      summary: `Summary for Task ${this.nextTaskId}`,
      dueDate: new Date().toISOString().split('T')[0]
    })
    
  
  }
  onStartAddTask () {
    this.isAddingTask = true;
  }
  onCloseTask () {
    this.isAddingTask = false;
  }
 
}