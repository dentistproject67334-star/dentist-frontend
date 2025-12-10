import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegComponent } from './reg/reg.component';
import { LoginComponent } from './login/login.component';
import { DentaltreatmentComponent } from './dentaltreatment/dentaltreatment.component';
import { ProcedureComponent } from './procedure/procedure.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BookoppintmentComponent } from './bookoppintment/bookoppintment.component';


import { AddblogsComponent } from './addblogs/addblogs.component';
import { AddtreatmentComponent } from './addtreatment/addtreatment.component';
import { AddprocedureComponent } from './addprocedure/addprocedure.component';
import { ViewregistersComponent } from './viewregisters/viewregisters.component';
import { Blog1Component } from './blog1/blog1.component';
import { UpdatetreatmentsComponent } from './updatetreatments/updatetreatments.component';
import { VisithistoryComponent } from './visithistory/visithistory.component';
import { UpdateblogsComponent } from './updateblogs/updateblogs.component';
import { Blog2Component } from './blog2/blog2.component';
import { Blog3Component } from './blog3/blog3.component';
import { Blog4Component } from './blog4/blog4.component';
import { Blog5Component } from './blog5/blog5.component';
import { Blog6Component } from './blog6/blog6.component';
import { Procedure1Component } from './procedure1/procedure1.component';
import { Procedure2Component } from './procedure2/procedure2.component';
import { Procedure3Component } from './procedure3/procedure3.component';
import { ViewappointmentComponent } from './viewappointment/viewappointment.component';
import { UpdateprocedureComponent } from './updateprocedure/updateprocedure.component';



export const routes: Routes = [
   {path:'',component:HomeComponent},
   {path:'reg',component:RegComponent},
   {path:'login',component:LoginComponent},
   {path:'dentaltreatment',component:DentaltreatmentComponent},
   {path:'procedure',component:ProcedureComponent},
   {path:'blogs',component:BlogsComponent},
   {path:'contact',component:ContactComponent},
   {path:'adminlogin',component:AdminloginComponent},
   { path: 'bookopt', component: BookoppintmentComponent },
   {path:'bookopt/:tname',component:BookoppintmentComponent},
   {path:'addblogs',component:AddblogsComponent},
   {path:'addtreat',component:AddtreatmentComponent},
   {path:'addprocedure',component:AddprocedureComponent},
   {path:'blog1',component:Blog1Component},
   {path:'blog2',component:Blog2Component},
   {path:'blog3',component:Blog3Component},
   {path:'blog4',component:Blog4Component},
   {path:'blog5',component:Blog5Component},
   {path:'blog6',component:Blog6Component},
   {path:'procedure1',component:Procedure1Component},
   {path:'procedure2',component:Procedure2Component},
   {path:'procedure3',component:Procedure3Component},
   {path:'viewreg',component:ViewregistersComponent},
   {path:'updatetreat/:tid',component:UpdatetreatmentsComponent},
   {path:'vhistory',component:VisithistoryComponent},
   {path:'viewappointment',component:ViewappointmentComponent},
   {path:'updateblogs/:bid',component:UpdateblogsComponent},
   {path:'updateproce/:pid',component:UpdateprocedureComponent},
  

];
