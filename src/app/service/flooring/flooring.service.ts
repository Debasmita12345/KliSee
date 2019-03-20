import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlooringService {
  
  id: string= "1";

  constructor(private http: HttpClient) { }

  getFlooringList():Observable<any>{
    return this.http.get("https://navkiraninfotech.com/Customers/custom/klisee/api/get_all_sub_subtypes?subtype_id=" +this.id)
  }
}
