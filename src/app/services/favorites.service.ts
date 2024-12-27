import { Injectable } from '@angular/core';
import { Result } from '../interface/marvel';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class FavoritesService {
  constructor() {
    const initialCount = this.getStoredCount();
    this.favoritesCountSubject.next(initialCount);
  }

  private favoritesKey = 'marvelFavorites';
  private contKey = 'contFavorites'; 
  private favoritesCountSubject = new BehaviorSubject<number>(0);

  favoritesCount$ = this.favoritesCountSubject.asObservable();

  getFavorites(): Result[] {
    const favorites = localStorage.getItem(this.favoritesKey);
    return favorites ? JSON.parse(favorites) : [];
  }

  addFavorite(character: Result): void {
    const favorites = this.getFavorites();
    if (!favorites.some(fav => fav.id === character.id)) {
      favorites.push(character);
      localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
      this.updateCount(1);
    }
  }

  removeFavorite(character: Result): void {
    const favorites = this.getFavorites().filter(fav => fav.id !== character.id);
    localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
    this.updateCount(-1);
  }

  isFavorite(character: Result): boolean {
    return this.getFavorites().some(fav => fav.id === character.id);
  }

  private getStoredCount(): number {
    const count = localStorage.getItem(this.contKey);
    return count ? JSON.parse(count) : 0;
  }

  private updateCount(change: number): void {
    const currentCount = this.favoritesCountSubject.value;
    const newCount = currentCount + change;

    this.favoritesCountSubject.next(newCount);

    localStorage.setItem(this.contKey, JSON.stringify(newCount));
  }
}
