import { Injectable } from '@angular/core';
import url from './serverurl';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Treatment } from '../models/treatment';

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {
constructor(private http:HttpClient) { }
   getallemps():Observable<Treatment[]>
   {
    return this.http.get<Treatment[]>(url+"/treatment")
   }
   addemp(ad:Treatment):Observable<Treatment>
   {
    return this.http.post<Treatment>(url+"/treatment",ad)
   }
   del(id:any):Observable<any>
{
  return this.http.delete(url+"/treatment/"+id)
}
update(id:any,ad:Treatment):Observable<Treatment>{
  return this.http.put<Treatment>(url+"/treatment/"+id,ad)
}
search(id:any):Observable<Treatment>{
  return this.http.get<Treatment>(url+"/treatment/"+id)
}
}
