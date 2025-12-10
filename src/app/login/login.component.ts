import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Register } from '../models/register';
import { FormsModule } from '@angular/forms';
import { RegisterService } from '../services/register.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
})
export class LoginComponent {
r:Register=new Register()
constructor(private es:RegisterService,private router:Router){

}
submitdata(){
  this.es.login(this.r.emailid,this.r.password).subscribe(data=>{
    if(data.length>0){
      alert("Login Successful")
      localStorage.setItem("uemailid",this.r.emailid)
      localStorage.setItem("uname",data[0].name)
      this.router.navigate(["/"])
    }
    else{
      alert("Invalid emailid or password")
    }
  })
}
}
