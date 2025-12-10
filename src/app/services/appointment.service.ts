import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Appointment } from '../models/appointment';
import url from './serverurl';
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http:HttpClient) { }
   getallemps():Observable<Appointment[]>
   {
    return this.http.get<Appointment[]>(url+"/appointment")
   }
   addemp(ad:Appointment):Observable<Appointment>
   {
    return this.http.post<Appointment>(url+"/appointment",ad)
   }
   del(id:any):Observable<any>
{
  return this.http.delete(url+"/appointment/"+id)
}
update(id:any,ad:Appointment):Observable<Appointment>{
  return this.http.put<Appointment>(url+"/appointment/"+id,ad)
}
search(id:any):Observable<Appointment>{
  return this.http.get<Appointment>(url+"/appointment/"+id)
}
login(em:any):Observable<Appointment[]>{
  return this.http.get<Appointment[]>(url+"/appointmentem/"+em)
}

}
