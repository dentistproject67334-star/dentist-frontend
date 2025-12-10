import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-visithistory',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visithistory.component.html',
  styleUrl: './visithistory.component.css'
})
export class VisithistoryComponent  implements OnInit{
aprr:Appointment[]=[]
constructor(private as:AppointmentService) {

}
ngOnInit(): void {
  this.as.getallemps().subscribe(data=>{
   if(data.length>0)
   {
    this.aprr=data.filter(a=>a.emailid==localStorage.getItem("uemailid"))
   }
  })
}
}
