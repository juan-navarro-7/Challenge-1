import { Component, Input } from '@angular/core';
import { Result } from '../../../interface/marvel';
import { FavoritesService } from '../../../services/favorites.service';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-card-box',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() character!: Result;

  isFavorite: boolean = false;

  constructor(
    private favoritesService: FavoritesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isFavorite = this.favoritesService.isFavorite(this.character);
  }

  toggleFavorite(): void {
    if (this.isFavorite) {
      this.favoritesService.removeFavorite(this.character);
    } else {
      this.favoritesService.addFavorite(this.character);
    }
    this.isFavorite = !this.isFavorite;
  }

  navigateToInfo(): void {
    this.router.navigate(['/marvel/info', this.character.id]);
  }
}
