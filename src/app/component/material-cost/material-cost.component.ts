import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-material-cost',
  templateUrl: './material-cost.component.html',
  styleUrls: ['./material-cost.component.css']
})
export class MaterialCostComponent implements OnInit {
  materialCost: FormGroup;

  constructor() { 
    this.materialCost=new FormGroup({
      casePackSize: new FormControl('', [Validators.required]),
      pricePerSquerFeet: new FormControl ('', [Validators.required])
    })
  }

  ngOnInit() {
  }

}

