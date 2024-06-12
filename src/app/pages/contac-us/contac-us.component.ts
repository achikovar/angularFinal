import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-contac-us',
  standalone: true,
  imports: [
    RouterModule,
    ContacUsComponent,
    FormsModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './contac-us.component.html',
  styleUrl: './contac-us.component.scss',
})
export class ContacUsComponent {
  email = 'info@kentsero.ge';
}
