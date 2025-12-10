import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Register } from '../models/register';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-reg',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './reg.component.html',
   styleUrls: ['./reg.component.css']
})
export class RegComponent {
r:Register=new Register()
constructor(private es:RegisterService,private router:Router)
{}
submitdata(){
this.es.addemp(this.r).subscribe(data=>{
  if(data!=null)
    alert("Registaration successful")
   this.router.navigate(["/"])
})
}
}

