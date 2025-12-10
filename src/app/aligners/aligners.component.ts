import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aligners',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './aligners.component.html',
  styleUrl: './aligners.component.css'
})
export class AlignersComponent {

}
