import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from '../../../interface/marvel';
import { MarvelService } from '../../../services/marvel-api.service';
import { FavoritesService } from '../../../services/favorites.service';
import { Results } from '../../../interface/comics';

@Component({
  selector: 'marvel-info-hero-page',
  templateUrl: './info-hero-page.component.html',
  styleUrl: './info-hero-page.component.css'
})
export class InfoHeroPageComponent implements OnInit{

  heroId: string | null = null;
  character!: Result;
  isFavorite: boolean = false;
  public comics: Results[] = [];

  constructor(
    private route: ActivatedRoute,
    private marvelService: MarvelService,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    this.heroId = this.route.snapshot.paramMap.get('id');
    if (this.heroId) {
      this.loadHeroDetails(this.heroId);
      this.loadHeroComics(this.heroId);
    }
  }

  loadHeroDetails(id: string): void {
    this.marvelService.getCharacterById(id).subscribe({
      next: (data) => {
        this.character = data[0]; // Guardar los detalles del héroe
        this.isFavorite = this.favoritesService.isFavorite(this.character);
      }
    });
  }

  loadHeroComics(id: string): void {
    this.marvelService.getCharacterByIdComics(id).subscribe(
      comics => {
        this.comics = comics; // Guardar los comics del héroe
      }
    );
  }

  toggleFavorite(): void {
    if (this.isFavorite) {
      this.favoritesService.removeFavorite(this.character);
    } else {
      this.favoritesService.addFavorite(this.character);
    }
    this.isFavorite = !this.isFavorite;
  }


}
