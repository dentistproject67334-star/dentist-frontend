import { Injectable } from '@angular/core';
import url from './serverurl';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Procedure } from '../models/procedure';
@Injectable({
  providedIn: 'root'
})
export class ProcedureService {
 constructor(private http:HttpClient) { }
   getallemps():Observable<Procedure[]>
   {
    return this.http.get<Procedure[]>(url+"/procedure")
   }
   addemp(ad:Procedure):Observable<Procedure>
   {
    return this.http.post<Procedure>(url+"/procedure",ad)
   }
   del(id:any):Observable<any>
{
  return this.http.delete(url+"/procedure/"+id)
}
update(id:any,ad:Procedure):Observable<Procedure>{
  return this.http.put<Procedure>(url+"/procedure/"+id,ad)
}
search(id:any):Observable<Procedure>{
  return this.http.get<Procedure>(url+"/procedure/"+id)
}
}
