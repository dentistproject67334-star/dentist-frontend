import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Procedure } from '../models/procedure';
import { ActivatedRoute, Router } from '@angular/router';
import { ProcedureService } from '../services/procedure.service';

@Component({
  selector: 'app-updateprocedure',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './updateprocedure.component.html',
  styleUrl: './updateprocedure.component.css'
})
export class UpdateprocedureComponent {
blo:Procedure=new Procedure()
constructor(private route:ActivatedRoute,private ds:ProcedureService,private router:Router){
  this.blo.pid=route.snapshot.params["pid"]
}
ngOnInit(): void {
  this.ds.search(this.blo.pid).subscribe(data=>{
    if(data!=null)
      this.blo=data
  })
}
  submitdata()
  {
this.ds.update(this.blo.pid,this.blo).subscribe(data=>{
  if(data!=null){
    alert('Procedure updated Successfully')
     this.router.navigate(["/"])
  }
})
  }
}
