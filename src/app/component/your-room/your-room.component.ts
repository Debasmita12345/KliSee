import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-your-room',
  templateUrl: './your-room.component.html',
  styleUrls: ['./your-room.component.css']
})
export class YourRoomComponent implements OnInit {
  myRoom: FormGroup;
  // element: Array<string> =[];
  

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myRoom = this.fb.group({
      rooms: this.fb.array([])
    })
    console.log(this.myRoom)
    this.addRoom()


  }

  get roomForms() {
    return this.myRoom.get('rooms') as FormArray
  }

  addRoom(){
    const room = this.fb.group({ 
      roomname: [],
      roomlength: [],
      roombreadth: [],
      roomDemoNeed: [],
      roomBaseboardNeed: [],
      roomdoorways: [],
      roomstepdowns: []
    })

    this.roomForms.push(room)
  }

  deletePhone(i){
    this.roomForms.removeAt(i)
  }

  deleteButton(i){
    if(i==0){
      return true;
    }
    // if (this.roomForms.length == 1){
    //   return true;
    // }
  }

  getLength(i){
    if((this.roomForms.length-1)==i){
      return "active"
    }
    else{
      return "stor"
    }
    // return this.roomForms.length
  }
  
  // clicked(event) {
  //   // event.target.classList.remove('stor-room-details')
  //   var el = document.getElementById("removeClass_"+event)[0];
  //   el.removeClass('stor-room-details');

  // }
}
