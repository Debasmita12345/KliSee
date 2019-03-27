import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FlooringService } from 'src/app/service/flooring/flooring.service';


@Component({
  selector: 'app-flooring',
  templateUrl: './flooring.component.html',
  styleUrls: ['./flooring.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('200ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class FlooringComponent implements OnInit {

  flooring_list: Array<string> = [];
  flooring_id: Array<string> = [];
  title: string = sessionStorage.getItem('flooring')

  myRoom: FormGroup;
  materialCost: FormGroup;

  constructor(public flooring_service: FlooringService){
    this.myRoom=new FormGroup({
      roomname: new FormControl('', [Validators.required]),
      roomlength: new FormControl ('', [Validators.required]),
      roombreadth: new FormControl ('', [Validators.required]),
      roomDemoNeed: new FormControl ('', [Validators.required]),
      roomBaseboardNeed: new FormControl ('', [Validators.required]),
      roomdoorways: new FormControl ('', [Validators.required]),
      roomstepdowns: new FormControl ('', [Validators.required])
    })
    this.materialCost=new FormGroup({
      casePackSize: new FormControl('', [Validators.required]),
      pricePerSquerFeet: new FormControl ('', [Validators.required])
    })
  }

  ngOnInit() {
    this.flooring_service.getFlooringList().subscribe(res=>{
      // console.log(res)
      let i: number;
      for(i=0; i<res.data.length; i++){
        this.flooring_list.push(res.data[i].type_name);
        this.flooring_id.push(res.data[i].id);
        // console.log(localStorage.getItem('floorId'))
      }
    })
    
  }

  getId(i){
    
    sessionStorage.setItem('floorId', i)
     console.log(sessionStorage.getItem('floorId'))
  }
  visible:boolean = false;
}
