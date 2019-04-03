import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LocationService } from 'src/app/service/location/location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  place: string;
  message: string;
  a: boolean;

  myLocationFrm: FormGroup;

  constructor(public locationService: LocationService,
              public router: Router) { 
                this.a= true;
    this.myLocationFrm = new FormGroup({
      place: new FormControl('', [Validators.required])
    })
  }

  ngOnInit() {
  }

  locationSubmit(){
    sessionStorage.setItem('place', this.myLocationFrm.value.place)
    this.place= sessionStorage.getItem('place')
    this.locationService.getLocation(this.place).subscribe(res=>{
      // console.log(res)
      if(res.success){
        this.a = false;
        this.message= res.data.city;
      }
      else{
        this.a= true;
        this.message= res.message
      }
    })
    setTimeout(() => {
      this.router.navigate(['/materialcost'])
    }, 3000)
  }

}
