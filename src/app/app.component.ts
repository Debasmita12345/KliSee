import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'klisee';
  constructor(){
    // console.log(sessionStorage.getItem('userId')+'pp')
  }
}
