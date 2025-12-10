import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Adminlogin } from '../models/adminlogin';
import { AdminloginService } from '../services/adminlogin.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adminlogin',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
adm:Adminlogin=new Adminlogin()
constructor(private ads:AdminloginService,private router:Router){

}
submitdata(){
this.ads.login(this.adm.emailid,this.adm.password).subscribe(data=>{
  if(data.length>0){
    alert("Admin login Successfully")
    localStorage.setItem("aemailid",this.adm.emailid)
    this.router.navigate(["/"])
  }
})
}
}
