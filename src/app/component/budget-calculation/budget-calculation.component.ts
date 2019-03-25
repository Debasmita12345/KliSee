import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-calculation',
  templateUrl: './budget-calculation.component.html',
  styleUrls: ['./budget-calculation.component.css']
})
export class BudgetCalculationComponent implements OnInit {

  title: string = sessionStorage.getItem('flooring')

  constructor() { }

  ngOnInit() {
  }

}
