import { Component,Input } from '@angular/core';

interface USE {
  id:string;
  name:string;
  avatar:string;

}

@Component({
  selector: 'app-footer',
  imports: [],
  standalone:true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input () use! : USE ;
}
