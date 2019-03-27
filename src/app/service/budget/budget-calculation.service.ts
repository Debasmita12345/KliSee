import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BudgetCalculationService {

  constructor(private http: HttpClient) { }

  // getBudget(){
  //   return this.http.post()
  // }
}
