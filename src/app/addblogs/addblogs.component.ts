import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Blogs } from '../models/blogs';
import { BlogsService } from '../services/blogs.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-addblogs',
  standalone: true,
  imports: [FormsModule,RouterModule,CommonModule],
  templateUrl: './addblogs.component.html',
  styleUrl: './addblogs.component.css'
})
export class AddblogsComponent implements OnInit{
blo:Blogs=new Blogs()
dt:Blogs=new Blogs()
blarr:Blogs[]=[]
constructor(private bs:BlogsService,private router:Router){

}
ngOnInit(): void {
 this.gettreatments()
}
submitdata(){
this.bs.addemp(this.blo).subscribe(data=>{
  if(data!=null)
    alert("Blogs added successfully")
   this.router.navigate(["/"])
})
}
deltreatment(bid:any){
  this.bs.del(bid).subscribe(data=>{
    alert("Blogs deleted")
    this.gettreatments()
  })
}
gettreatments(){
 this.bs.getallemps().subscribe(data=>{
    if(data.length>0)
      this.blarr=data
  })
  
}
updateblogs(bid:any){
     this.router.navigate(["/updateblogs",bid])
  }
}
