import { Component, OnInit } from '@angular/core';
import { Blogs } from '../models/blogs';
import { CommonModule } from '@angular/common';
import { BlogsService } from '../services/blogs.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent implements OnInit{
barr:Blogs[]=[]
constructor(private bs:BlogsService){

}
ngOnInit(): void {
  this.bs.getallemps().subscribe(data=>{
    if(data.length>0)
    {
      this.barr=data
      console.log(this.barr)
    }
  })
}
}
