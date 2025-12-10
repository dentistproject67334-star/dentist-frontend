import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';
import { AppointmentService } from '../services/appointment.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bookoppintment',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './bookoppintment.component.html',
  styleUrl: './bookoppintment.component.css'
})
export class BookoppintmentComponent implements OnInit {
  tname: string = "";
  ba: Appointment = new Appointment();

  constructor(private em: AppointmentService, private route: ActivatedRoute,private router:Router) {}

  ngOnInit(): void {
    this.tname = this.route.snapshot.params["tname"];
    if (this.tname) {
      this.ba.treatname = this.tname;
    } else {
      this.ba.treatname = "";
    }
  }

  submitdata() {
    this.ba.emailid=localStorage.getItem("uemailid")
    this.em.addemp(this.ba).subscribe({
      next: (data) => {
        if (data != null) {
          alert("Appointment booked successfully!");
          this.ba = new Appointment();
          this.router.navigate(["/"])
        }
      },
      error: (err) => {
        console.error('Error while booking appointment:', err);
        alert("Failed to book appointment. Please try again.");
      }
    });
  }
}
