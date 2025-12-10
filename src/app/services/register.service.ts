import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import url from './serverurl';
import { Register } from '../models/register';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
   getallemps():Observable<Register[]>
   {
    return this.http.get<Register[]>(url+"/register")
   }
   addemp(ad:Register):Observable<Register>
   {
    return this.http.post<Register>(url+"/register",ad)
   }
   del(id:any):Observable<any>
{
  return this.http.delete(url+"/register/"+id)
}
update(id:any,ad:Register):Observable<Register>{
  return this.http.put<Register>(url+"/register/"+id,ad)
}
search(id:any):Observable<Register>{
  return this.http.get<Register>(url+"/register/"+id)
}
login(em:any,ps:any):Observable<Register[]>{
  return this.http.get<Register[]>(url+"/register/"+em+"/"+ps)
}
searchbyemail(em:any):Observable<Register>
{
  return this.http.get<Register>(url+"/registerem/"+em)
}
}


