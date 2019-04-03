import { Component, OnInit } from '@angular/core';
import { BudgetCalculationService } from 'src/app/service/budget/budget-calculation.service';
import { IBudget } from 'src/app/budgetfinal';


@Component({
  selector: 'app-budget-calculation',
  templateUrl: './budget-calculation.component.html',
  styleUrls: ['./budget-calculation.component.css']
})
export class BudgetCalculationComponent implements OnInit {

  title: string = sessionStorage.getItem('flooring')
  budgetMatArr: Array<IBudget>= [];
  budgetIntArr: Array<IBudget>= [];
  totalInstallationCost: string;
  totalMaterialCost: string;
  totalOverallCost: string;
  totalAvgCost: string;

  constructor(public budgetCalculation: BudgetCalculationService) { }

  ngOnInit() {
    this.budgetCalculation.getBudget().subscribe(res=>{
      console.log(res)
      this.totalInstallationCost= res.data.total_installation_cost;
      this.totalMaterialCost= res.data.total_material_cost;
      this.totalOverallCost= res.data.total_overall_cost;
      this.totalAvgCost= res.data.total_avg_cost;
      // console.log(res.data.material_budget[0].field_name)
      for(let i: number = 0; i<res.data.material_budget.length; i++){
        // console.log(res.data.material_budget[i].field_name)
        let Bcost : IBudget;
        Bcost=
        { field_name: res.data.material_budget[i].field_name, 
          overall_cost: res.data.material_budget[i].overall_cost,
          standard_cost: res.data.material_budget[i].standard_cost,
          value: res.data.material_budget[i].value
        }
        this.budgetMatArr.push(Bcost); 
        console.log(this.budgetMatArr)
      }
      for(let i: number = 0; i<res.data.installation_budget.length; i++){
        // console.log(res.data.material_budget[i].field_name)
        let Bcost : IBudget;
        Bcost=
        {
          field_name: res.data.installation_budget[i].field_name, 
          overall_cost: res.data.installation_budget[i].overall_cost,
          standard_cost: res.data.installation_budget[i].standard_cost,
          value: res.data.installation_budget[i].value
        }
        this.budgetIntArr.push(Bcost); 
        console.log(this.budgetIntArr)
      }
    })
  }

}
