import { Component, OnInit } from '@angular/core';
import { Marvel, Result } from '../../../interface/marvel';
import { MarvelService } from '../../../services/marvel-api.service';
import { FavoritesService } from '../../../services/favorites.service';

@Component({
  selector: 'marvel-list-hero-page',
  templateUrl: './list-hero-page.component.html',
  styleUrls: ['./list-hero-page.component.css']
})
export class ListHeroPageComponent implements OnInit {

  public characters: Result[] = [];
  public totalCharacters: number = 0;

  constructor(
    private marvelService: MarvelService,
  ){}

  ngOnInit(): void {
    this.getListCharacter()
  }


  getListCharacter():void {
    this.marvelService.getCharacters()
      .subscribe(
        characters => {
        this.characters = characters;
        this.totalCharacters = characters.length;
        console.log(this.characters);
      } )
  }

  updateCharacters(characters: Result[]): void {
    this.characters = characters;
    this.totalCharacters = characters.length;
  }

}
