import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-your-room',
  templateUrl: './your-room.component.html',
  styleUrls: ['./your-room.component.css']
})
export class YourRoomComponent implements OnInit {
  myRoom: FormGroup;
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
    //console.log(this.myRoom)
    this.addRoom()
    this.select(0)
    this.selectedIndexP=1;
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
      doorways: [],
      step_down: []
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
