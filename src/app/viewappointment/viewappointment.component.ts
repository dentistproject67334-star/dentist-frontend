import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';
import { AppointmentService } from '../services/appointment.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewappointment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewappointment.component.html',
  styleUrl: './viewappointment.component.css'
})
export class ViewappointmentComponent implements OnInit{
aparr:Appointment[]=[]
constructor(private rs:AppointmentService){

}
ngOnInit(): void {
  this.rs.getallemps().subscribe(data=>{
    if(data.length>0  )
       this.aparr=data
  })
}
}
