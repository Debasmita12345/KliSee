import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  myLocationFrm: FormGroup;

  constructor() { 
    this.myLocationFrm = new FormGroup({
      place: new FormControl('', [Validators.required])
    })
  }

  ngOnInit() {
  }

  locationSubmit(){
    sessionStorage.setItem('place', this.myLocationFrm.value.place)
  }

}
