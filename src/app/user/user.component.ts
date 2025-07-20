import { Component, EventEmitter, Input, Output  } from '@angular/core';

interface User {
  id : string;
  avatar:string;
  name:string;
}

@Component({
  selector: 'app-user',
  standalone: true,//its set to standalone to be true because we want to tell ngModule that it is individual component
  templateUrl: './user.component.html',//html file of that component
  styleUrl: './user.component.css',//style file for this component
})
export class UserComponent {
  @Input({required:true}) user! : User ;
  //user is an object with id, avatar and name properties
  @Output() select = new EventEmitter<string>();
  //select is an event that emits the id of the user when the user is clicked
 

  get  imagePath(){
    return 'assets/users/' + this.user.avatar;}
    //this function returns the path of the image of the user

    onUserClick() {
      this.select.emit(this.user.id)
      //when the user is clicked, the id of the user is emitted
    }
  }
 
 
