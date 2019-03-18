import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isloggedIn: boolean;

  myControl = new FormControl();
  options: string[] = ['Kitchen remodel', 'Bathroom remodel', 'Other'];
  filteredOptions: Observable<string[]>;

  constructor() {
    this.isloggedIn = false;
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
    );
    if(localStorage.getItem('userId') !== null){
      this.isloggedIn = true;
    } else {
      this.isloggedIn= false; 
    }
    
  }

  LogOut(){
    localStorage.removeItem('userId')
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
