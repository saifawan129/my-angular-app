
import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { type NewTaskData } from '../tasks/task/task.model';
import { TaskService } from '../tasks/tasks.service';
@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
  imports :[FormsModule],
  standalone:true
})
export class NewTaskComponent {
   @Input({required:true}) userId! : string;
   @Output()  close = new EventEmitter<void>()


   enteredTitle = ''
   enteredSummary = ''
   enteredDate = ''
private taskService = inject(TaskService)


   onCancel() {
    this.close.emit();
  } 
 
  onSubmit(){
      this.taskService.addTask({
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date : this.enteredDate,
      },this.userId
    )
    this.close.emit();
  }
  
}
