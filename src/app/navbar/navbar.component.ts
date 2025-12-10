import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
 userType="guest"
 constructor(private router:Router)
 {

 }
 ngOnInit(): void {
   this.router.events.subscribe((val:any)=>{
   if(val.url){
    var uemail=localStorage.getItem("uemailid")
    if(uemail!=null)
    {
      this.userType="user"
    }
    else{
      var aemailid=localStorage.getItem("aemailid")
      if(aemailid!=null){
        this.userType="admin"
      }else
      this.userType="guest"
    }
   }
   } )
 }
 ulogout(){
  localStorage.removeItem('uemailid')
  this.router.navigate(["/"])
 }
 alogout(){
  localStorage.removeItem('aemailid')
  this.router.navigate(["/"])
 }
}
