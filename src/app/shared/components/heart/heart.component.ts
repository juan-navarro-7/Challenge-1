import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritesService } from '../../../services/favorites.service';

@Component({
  selector: 'shared-heart-box',
  templateUrl: './heart.component.html',
  styleUrl: './heart.component.css'
})
export class HeartComponent implements OnInit{
  count: number = 0;

  constructor(
    private router: Router,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    this.favoritesService.favoritesCount$.subscribe((count) => {
      this.count = count;
    });
  }

  navigateToFavorites(): void {
    this.router.navigate(['/marvel/favorites']);
  }
}
