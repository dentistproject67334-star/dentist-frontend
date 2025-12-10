import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Treatment } from '../models/treatment';
import { TreatmentService } from '../services/treatment.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addtreatment',
  standalone: true,
  imports: [FormsModule,RouterModule,CommonModule],
  templateUrl: './addtreatment.component.html',
  styleUrl: './addtreatment.component.css'
})
export class AddtreatmentComponent implements OnInit{
dt:Treatment=new Treatment()
dtarr:Treatment[]=[]
constructor(private bs:TreatmentService,private router:Router){
}
ngOnInit(): void {
 this.gettreatments()
}
  submitdata(){
this.bs.addemp(this.dt).subscribe(data=>{
  if(data!=null)
    alert("Tretments added successfully")
   this.router.navigate(["/"])
})
}
deltreatment(tid:any){
  this.bs.del(tid).subscribe(data=>{
    alert("Treatment deleted")
    this.gettreatments()
  })
}
gettreatments(){
 this.bs.getallemps().subscribe(data=>{
    if(data.length>0)
      this.dtarr=data
  })
  
}
updatetr(tid:any){
     this.router.navigate(["/updatetreat",tid])
  }
}


