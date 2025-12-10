import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Procedure } from '../models/procedure';
import { ProcedureService } from '../services/procedure.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-procedure',
  standalone: true,
  imports: [FormsModule,RouterModule,CommonModule],
  templateUrl: './procedure.component.html',
  styleUrl: './procedure.component.css'
})
export class ProcedureComponent implements OnInit{
parr:Procedure[]=[]
constructor(private bs:ProcedureService){

}
ngOnInit(): void {
  this.bs.getallemps().subscribe(data=>{
    if(data.length>0)
    {
      this.parr=data
      console.log(this.parr)
       
    }
  })
}
}
