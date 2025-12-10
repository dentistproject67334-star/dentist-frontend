import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Procedure } from '../models/procedure';
import { ProcedureService } from '../services/procedure.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addprocedure',
  standalone: true,
  imports: [FormsModule,RouterModule,CommonModule],
  templateUrl: './addprocedure.component.html',
  styleUrl: './addprocedure.component.css'
})
export class AddprocedureComponent implements OnInit{

  blo:Procedure=new Procedure()
  dt:Procedure=new Procedure()
dtarr:Procedure[]=[]


constructor(private bs:ProcedureService,private router:Router){

}
ngOnInit(): void {
 this.gettreatments()
}
submitdata(){
this.bs.addemp(this.blo).subscribe(data=>{
  if(data!=null)
    alert("Procedures added successfully")
   this.router.navigate(["/"])
})
}
deltreatment(pid:any){
  this.bs.del(pid).subscribe(data=>{
    alert("Procedures deleted")
    this.gettreatments()
  })
}
gettreatments(){
 this.bs.getallemps().subscribe(data=>{
    if(data.length>0)
      this.dtarr=data
  })
  
}
updateproce(pid:any){
     this.router.navigate(["/updateproce",pid])
  }
}
