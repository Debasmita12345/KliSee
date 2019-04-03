import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-your-room',
  templateUrl: './your-room.component.html',
  styleUrls: ['./your-room.component.css']
})
export class YourRoomComponent implements OnInit {
  myRoom: FormGroup;
  roomArr: Array<FormGroup> =[];
  selectedIndex: any;
  selectedIndexP: any;
  select(index: any) {
      this.selectedIndex = index; 
        this.selectedIndexP=0;
  }
 
  status: boolean = false;
  
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myRoom = this.fb.group({
      rooms: this.fb.array([])
    })
   
    // console.log(this.myRoom.value)
    this.addRoom()
    this.select(0)
    this.selectedIndexP=1;
  }

  RoomFormSubmit(){
    console.log(this.myRoom.value.rooms.length)
    // console.log(this.myRoom.value.rooms[0])
    let i: number;
    for(i=0; i<this.myRoom.value.rooms.length; i++){
    this.roomArr.push(this.myRoom.value.rooms[i])
    }
    console.log(this.roomArr)
    sessionStorage.setItem('roomDetails', JSON.stringify(this.roomArr))
  }

  get roomForms() {
    return this.myRoom.get('rooms') as FormArray
  }

  addRoom(){
   
    const room = this.fb.group({ 
      room: [],
      length: [],
      depth: [],
      demo: [],
      baseboards: [],
      doorways: []
    })

    this.roomForms.push(room)
    this.select(sessionStorage.getItem('currentIndex'))
    //this.selectedIndexP=1;
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
  getIndex(index){
     sessionStorage.setItem('currentIndex',index);
  
  }
}
