import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MaterialCostService } from 'src/app/service/material/material-cost.service';

@Component({
  selector: 'app-material-cost',
  templateUrl: './material-cost.component.html',
  styleUrls: ['./material-cost.component.css']
})
export class MaterialCostComponent implements OnInit {
  materialCost: FormGroup;
  case_pack: string;
  cost_sf: string;

  constructor(public materialCostService: MaterialCostService) { 
    this.materialCost=new FormGroup({
      casePackSize: new FormControl('', [Validators.required]),
      pricePerSquerFeet: new FormControl ('', [Validators.required])
    })
  }

  ngOnInit() {
    this.materialCostService.getMaterialCost().subscribe(res=>{
      // console.log(res);
      this.case_pack= res.data.case_pack;
      this.cost_sf= res.data.cost_sf;
    })
  }

}

