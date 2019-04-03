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
  manufacturer: string;
  floor_type_id: string=sessionStorage.getItem('floorId')
  constructor(public materialCostService: MaterialCostService) { 
    this.materialCost=new FormGroup({
      casePackSize: new FormControl('', [Validators.required]),
      pricePerSquerFeet: new FormControl ('', [Validators.required]),
      manuFacturer: new FormControl ('', [Validators.required]),
      sku: new FormControl ('', [Validators.required])
    })
  }

  ngOnInit() {
    //localStorage.removeItem('floorId')
  //  console.log(this.floor_type_id);
    
    this.materialCostService.getMaterialCost(this.floor_type_id).subscribe(res=>{
      // console.log(res);
      sessionStorage.setItem('casePack', res.data.case_pack)
      sessionStorage.setItem ('priceSquare', res.data.cost_sf)
      sessionStorage.setItem('manufacturer', res.data.material_name)
      
      this.case_pack= res.data.case_pack;
      this.cost_sf= res.data.cost_sf;
      this.manufacturer= res.data.material_name;
    })
  }

  materialCostSubmit(){
    // console.log(this.materialCost.value.casePackSize);
    // console.log(this.materialCost.value.pricePerSquerFeet);
    // console.log(this.materialCost.value.manuFacturer);
    if(this.materialCost.value.casePackSize!=''){
      sessionStorage.setItem('casePack', this.materialCost.value.casePackSize)
    }
    if(this.materialCost.value.pricePerSquerFeet!=''){
      sessionStorage.setItem ('priceSquare', this.materialCost.value.pricePerSquerFeet)
    }
    if(this.materialCost.value.manuFacturer!=''){
      sessionStorage.setItem('manufacturer', this.materialCost.value.manuFacturer)
    }
    if(this.materialCost.value.sku!=''){
      sessionStorage.setItem('sku', this.materialCost.value.sku)
    }
  }

}

