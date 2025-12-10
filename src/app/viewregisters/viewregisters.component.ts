import { Component, OnInit } from '@angular/core';
import { Register } from '../models/register';
import { RegisterService } from '../services/register.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewregisters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewregisters.component.html',
  styleUrl: './viewregisters.component.css'
})
export class ViewregistersComponent implements OnInit{
rarr:Register[]=[]
constructor(private rs:RegisterService){

}
ngOnInit(): void {
  this.rs.getallemps().subscribe(data=>{
    if(data.length>0  )
       this.rarr=data
  })
}
}
