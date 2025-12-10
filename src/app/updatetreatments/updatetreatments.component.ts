import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Treatment } from '../models/treatment';
import { ActivatedRoute, Router } from '@angular/router';
import { TreatmentService } from '../services/treatment.service';

@Component({
  selector: 'app-updatetreatments',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './updatetreatments.component.html',
  styleUrl: './updatetreatments.component.css'
})
export class UpdatetreatmentsComponent implements OnInit{
dt:Treatment=new Treatment()
constructor(private route:ActivatedRoute,private ds:TreatmentService,private router:Router){
  this.dt.tid=route.snapshot.params["tid"]
}
ngOnInit(): void {
  this.ds.search(this.dt.tid).subscribe(data=>{
    if(data!=null)
      this.dt=data
  })
}
  submitdata()
  {
this.ds.update(this.dt.tid,this.dt).subscribe(data=>{
  if(data!=null){
    alert('Treatment updated Successfully')
     this.router.navigate(["/"])
  }
})
  }
}
