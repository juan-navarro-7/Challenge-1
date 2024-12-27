import { Component, EventEmitter, Output } from '@angular/core';
import { MarvelService } from '../../../services/marvel-api.service';
import { Result } from '../../../interface/marvel';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  
  @Output() charactersFound = new EventEmitter<Result[]>();
  searchTerm: string = '';
  private searchSubject = new Subject<string>();

  constructor(private marvelService: MarvelService) {
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(term => this.performSearch(term));
  }

  onSearchChange(term: string): void {
    this.searchSubject.next(term);
  }

  performSearch(term: string): void {
    if (term.trim() === '') {
      this.charactersFound.emit([]);
      return;
    }
    this.marvelService.searchCharacters(term).subscribe(
      characters => this.charactersFound.emit(characters),
    );
  }
}
