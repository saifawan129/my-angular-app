import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output,  } from '@angular/core';

@Component({
  selector: 'app-new-task',
  imports: [NgIf],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
   @Output()  cancel = new EventEmitter<void>()
   onCancel() {
    this.cancel.emit();
  } 
 
  
}
