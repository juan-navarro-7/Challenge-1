import { Component, OnInit } from '@angular/core';
import { Result } from '../../../interface/marvel';
import { FavoritesService } from '../../../services/favorites.service';

@Component({
  selector: 'marvel-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {
  favoriteCharacters: Result[] = [];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    this.favoriteCharacters = this.favoritesService.getFavorites();
  }
}
