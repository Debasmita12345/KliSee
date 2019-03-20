import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ParentremodelService } from 'src/app/service/parentremodel/parentremodel.service';
import { IModel } from 'src/app/parentmodel';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isloggedIn: boolean;
  dataArr1: Array<IModel> = []//[IModel];//Array<IModel[]>;
  reModelId: string;
  OptionId: string;
  //nameArr: Array<string> = []
  
  // options: any;

  myControl = new FormControl();
  options: Array<string> = []//= ['Kitchen remodel', 'Bathroom remodel', 'Other'];
  filteredOptions: Observable<string[]>;

  constructor(public modelservice: ParentremodelService) {
    this.isloggedIn = false;
    
  }

  ngOnInit() {
    
    if(sessionStorage.getItem('userId') !== ''){
      this.isloggedIn = true;
    } else {
      this.isloggedIn= false; 
    }
    this.modelservice.getMainModel().subscribe(res=>
      {
        //console.log(res);
        //this.data = res.data;
        //console.log(this.data[0].remodel_id)
        let i: number = 0;
        // let model: IModel = {remodel_id: res.data[i].remodel_id, remodel_name: res.data[i].remodel_name};
        // this.dataArr1.push(model)
        //console.log(this.dataArr1)
        for(i=0; i<3; i++){
          //
          let model: IModel;
          model = {remodel_id: res.data[i].remodel_id, remodel_name: res.data[i].remodel_name};
          // console.log(i)
          //console.log(model)
          this.dataArr1.push(model)
          sessionStorage.setItem('modelId', res.data[2].remodel_id )
          // console.log(this.dataArr1)
          
        }
        // console.log(res.data[2].remodel_id)
        //console.log(this.dataArr1)
        for(i=0; i<3; i++){
          let model= this.dataArr1[i]
          // console.log(i+"th name= "+model.remodel_name)
        }

        for(i=0; i<this.dataArr1.length; i++){
          let name: string;
          name = res.data[i].remodel_id+'|'+res.data[i].remodel_name;
          this.options.push(name);
          // console.log(this.options)
        }
        this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
        // this.OptionId = res.data[2].remodel_id 

      })

  }



  LogOut(){
    sessionStorage.setItem('userId','')
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
    //return ["1|Palash"];

  }
  
  pp(option:string){
    var strp=option.split("|");
    return strp[1];
  }

  ppv(option:string){
    var strp=option.split("|");
    return strp[0];
  }

   ppr(option:string){
    sessionStorage.setItem('reModelId',option)
   }

   routerLink(){
     var reModelId=sessionStorage.getItem('reModelId');
    // console.log(sessionStorage.getItem('reModelId'));
    if(reModelId=='3'){
      return '/others';
    }
    else{
      return '/home';
    }
   }

}
