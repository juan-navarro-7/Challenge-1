import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-menu-box',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(private router: Router) {}

  navigateToAll(): void {
    this.router.navigate(['/list']);
  }
}
