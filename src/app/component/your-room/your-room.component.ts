import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-your-room',
  templateUrl: './your-room.component.html',
  styleUrls: ['./your-room.component.css']
})
export class YourRoomComponent implements OnInit {
  myRoom: FormGroup;

  constructor() {
    this.myRoom=new FormGroup({
      roomname: new FormControl('', [Validators.required]),
      roomlength: new FormControl ('', [Validators.required]),
      roombreadth: new FormControl ('', [Validators.required]),
      roomDemoNeed: new FormControl ('', [Validators.required]),
      roomBaseboardNeed: new FormControl ('', [Validators.required]),
      roomdoorways: new FormControl ('', [Validators.required]),
      roomstepdowns: new FormControl ('', [Validators.required])
    })
  }

  ngOnInit() {
  }

}

