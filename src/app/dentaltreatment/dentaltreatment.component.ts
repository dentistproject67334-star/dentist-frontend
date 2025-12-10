import { Component } from '@angular/core';
import { Treatment } from '../models/treatment';
import { TreatmentService } from '../services/treatment.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dentaltreatment',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './dentaltreatment.component.html',
  styleUrl: './dentaltreatment.component.css'
})
export class DentaltreatmentComponent {
tarr:Treatment[]=[]
uemail=localStorage.getItem('uemailid')
constructor(private bs:TreatmentService,private router:Router){

}
ngOnInit(): void {
  this.bs.getallemps().subscribe(data=>{
    if(data.length>0)
    {
      this.tarr=data
      console.log(this.tarr)
    }
  })
}
viewappointform(tname:any)
{
this.router.navigate(["/bookopt",tname])
}


}
