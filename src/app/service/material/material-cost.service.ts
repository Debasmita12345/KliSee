import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaterialCostService {
  id: string= "1";

  constructor(private http: HttpClient) { }

  getMaterialCost():Observable<any>{
    return this.http.get("https://navkiraninfotech.com/Customers/custom/klisee/api/fetch_material_cost_as_per_category_id?floor_type_id="+this.id)
  }
}
