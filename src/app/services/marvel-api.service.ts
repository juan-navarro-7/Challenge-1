import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Marvel, Result } from '../interface/marvel';
import { Comics, Results } from '../interface/comics';


@Injectable({providedIn: 'root'})
export class MarvelService {

  private apiUrl: string = 'http://gateway.marvel.com/v1/public/characters'
  private publicKey: string = 'a4f6a53cd541faf547417f474c63e992';
  private privateKey: string = '0d484cbdd1b6319858a95909bfd32acc900e1c9b';
  private ts: number = 1000;
  private hash: string = 'a03543c7f282d398da14bf2372949bec';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Result[]> {
    const url = `${this.apiUrl}?limit=50&ts=${this.ts}&apikey=${this.publicKey}&hash=${this.hash}`;
    return this.http.get<Marvel>(url).pipe(
      map(response => response.data.results)
    );
  }

  searchCharacters(name: string): Observable<Result[]> {
    const url = `${this.apiUrl}?nameStartsWith=${name}&ts=${this.ts}&apikey=${this.publicKey}&hash=${this.hash}`;
    return this.http.get<Marvel>(url).pipe(
      map(response => response.data.results)
    );
  }
  // http://gateway.marvel.com/v1/public/characters/1017100?ts=1000&apikey=a4f6a53cd541faf547417f474c63e992&hash=a03543c7f282d398da14bf2372949bec
  getCharacterById(id: string): Observable<Result[]> {
    const url = `${this.apiUrl}/${id}?ts=${this.ts}&apikey=${this.publicKey}&hash=${this.hash}`;
    return this.http.get<Marvel>(url).pipe(
      map(response => response.data.results)
    );
  }
  // http://gateway.marvel.com/v1/public/characters/1010354/comics?ts=1000&apikey=a4f6a53cd541faf547417f474c63e992&hash=a03543c7f282d398da14bf2372949bec
  getCharacterByIdComics(id: string): Observable<Results[]> {
    const url = `${this.apiUrl}/${id}/comics?ts=${this.ts}&apikey=${this.publicKey}&hash=${this.hash}`;
    return this.http.get<Comics>(url).pipe(
      map(response => response.data.results)
    );
  }
}
