import { Injectable } from '@angular/core';
import url from './serverurl';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Adminlogin } from '../models/adminlogin';
@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  constructor(private http:HttpClient) { }
   getallemps():Observable<Adminlogin[]>
   {
    return this.http.get<Adminlogin[]>(url+"/adminlogin")
   }
   addemp(ad:Adminlogin):Observable<Adminlogin>
   {
    return this.http.post<Adminlogin>(url+"/adminlogin",ad)
   }
   del(id:any):Observable<any>
{
  return this.http.delete(url+"/adminlogin/"+id)
}
update(id:any,ad:Adminlogin):Observable<Adminlogin>{
  return this.http.put<Adminlogin>(url+"/adminlogin/"+id,ad)
}
search(id:any):Observable<Adminlogin>{
  return this.http.get<Adminlogin>(url+"/adminlogin/"+id)
}
login(em:any,ps:any):Observable<Adminlogin[]>{
  return this.http.get<Adminlogin[]>(url+"/adminlogin/"+em+"/"+ps)
}
}
