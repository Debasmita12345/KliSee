import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetCalculationService {

  rooms = sessionStorage.getItem('roomDetails')
  // casepack= sessionStorage.getItem('casePack')
  priceSqrft= sessionStorage.getItem('priceSquare')
  place= sessionStorage.getItem('place')
  modelId= sessionStorage.getItem('ModelId')
  others= sessionStorage.getItem('flooringId')
  flooring= sessionStorage.getItem('floorId')
  manufacture= sessionStorage.getItem('manufacturer')
  constructor(private http: HttpClient) { 

  }

  getBudget(): Observable<any>{
    let casePack=sessionStorage.getItem('casePack');
    let priceSquare=sessionStorage.getItem('priceSquare');
    let manufacturer=sessionStorage.getItem('manufacturer');
    let sku=sessionStorage.getItem('sku')
    //console.log(sessionStorage.getItem('casePack'));
    var body = "all_data_collection="+ this.rooms+ "&case_pack_size="+ casePack + "&price_per_sf="+ priceSquare+ "&zip_code="+ this.place+ "&remodel_type_id="+ this.modelId+ "&remodel_sub_type_id="+ this.others+ "&remodel_sub_sub_type_id="+ this.flooring+ "&user_id="+ " "+ "&material_name="+ manufacturer+ "&sku="+ sku;
    console.log(body)
    return this.http.post(`https://navkiraninfotech.com/Customers/custom/klisee/api/budget_calculation?`+ body, "")
  }
}
