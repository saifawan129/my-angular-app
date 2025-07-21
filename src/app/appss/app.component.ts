import { Component } from '@angular/core';
import { HeaderComponent } from '../file/file.component';
import { DUMMY_USERS } from '../dummy-user';
import { UserComponent } from '../user/user.component';
import { TasksComponent } from '../tasks/tasks.component';
import { NgFor, NgIf } from '@angular/common';



@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  
})
export class AppComponent {
  title = 'my-angular-app';
  users = DUMMY_USERS;
  // DUMMY_USERS is an array of user objects imported from dummy-user.ts
  SelectUserId?: string ;
  // This is the id of the user that is selected by default

  get selectedUser() {
    return this.users.find((user) => user.id === this.SelectUserId);
    //find the user where user.id is equal to SelectUserId
  }

  onSelectUser(id: string){
    this.SelectUserId = id;
    //set the SelectUserId to the id of the user that is selected
  }
}

