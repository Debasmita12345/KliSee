import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isloggedIn: boolean;
  constructor() { }

  ngOnInit() {
    if(sessionStorage.getItem('userId') !=''){
      this.isloggedIn = true;
    } else {
      this.isloggedIn= false; 
    }
  }


  LogOut(){
    sessionStorage.setItem('userId','')
  }
}
