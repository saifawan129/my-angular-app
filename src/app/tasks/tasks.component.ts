import { Component,Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Showw } from './tasks.model';
import { NewTaskComponent} from '../new-task/new-task.component';
import { NgModule } from '@angular/core';


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
  tasks = [
    {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
    }
  ]

showAddTask: any;
  //the code for complete task button
    get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
  onCompleteTask(id:string) {
    this.tasks = this.tasks.filter((task)=> task.id !==id);
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
  onCancelTask () {
    this.isAddingTask = false;
  }
}