import { Injectable } from '@angular/core';
import { Blogs } from '../models/blogs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import url from './serverurl';
@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  constructor(private http:HttpClient) { }
   getallemps():Observable<Blogs[]>
   {
    return this.http.get<Blogs[]>(url+"/blogs")
   }
   addemp(ad:Blogs):Observable<Blogs>
   {
    return this.http.post<Blogs>(url+"/blogs",ad)
   }
   del(id:any):Observable<any>
{
  return this.http.delete(url+"/blogs/"+id)
}
update(id:any,ad:Blogs):Observable<Blogs>{
  return this.http.put<Blogs>(url+"/blogs/"+id,ad)
}
search(id:any):Observable<Blogs>{
  return this.http.get<Blogs>(url+"/blogs/"+id)
}
}
