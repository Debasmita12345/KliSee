import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FlooringService } from 'src/app/service/flooring/flooring.service';
import { IFloor } from 'src/app/floortype';


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


  floorArr: Array<IFloor> = []
  flooring_list: Array<string> = [];
  flooring_id: Array<string> = [];
  title: string = sessionStorage.getItem('flooring');
  options: Array<string> = [];
  firstValue: string;


  constructor(public flooring_service: FlooringService){}

  ngOnInit() {
    this.flooring_service.getFlooringList().subscribe(res=>{
      // console.log(res)
      let i: number;
      for(i=0; i<res.data.length; i++){
        this.flooring_list.push(res.data[i].type_name);
        this.flooring_id.push(res.data[i].id);
        // console.log(this.flooring_id)
        // console.log(localStorage.getItem('floorId'))
        let model: IFloor;
        model = {floor_id: res.data[i].id, floor_name: res.data[i].type_name};
        this.floorArr.push(model)
      }
      for(i=0; i<this.floorArr.length; i++){
        let both: string;
        both = res.data[i].id+'|'+ res.data[i].type_name;
        this.options.push(both);
        // console.log(this.options)
        if(i==0){
          this.firstValue= res.data[i].id
        }
      }
    })
    
  }

  name(option:string){
    var strp=option.split("|");
    return strp[1];
  }

  floor_id(option:string){
    var strp=option.split("|");
    return strp[0];
  }

  fun_id(option:string){
    sessionStorage.setItem('floorId',option)
   }

  //  func(option){
  //   // sessionStorage.setItem('flrId',option)
  //  }

  // getId(i){
    
  //   sessionStorage.setItem('floorId', i)
  //    console.log(sessionStorage.getItem('floorId'))
  // }
  visible:boolean = false;
}
