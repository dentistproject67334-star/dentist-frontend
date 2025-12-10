import { Component } from '@angular/core';
import { Blogs } from '../models/blogs';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogsService } from '../services/blogs.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-updateblogs',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './updateblogs.component.html',
  styleUrl: './updateblogs.component.css'
})
export class UpdateblogsComponent {
blo:Blogs=new Blogs()
constructor(private route:ActivatedRoute,private ds:BlogsService,private router:Router){
  this.blo.bid=route.snapshot.params["bid"]
}
ngOnInit(): void {
  this.ds.search(this.blo.bid).subscribe(data=>{
    if(data!=null)
      this.blo=data
  })
}
  submitdata()
  {
this.ds.update(this.blo.bid,this.blo).subscribe(data=>{
  if(data!=null){
    alert('Blogs updated Successfully')
     this.router.navigate(["/"])
  }
})
  }
}
