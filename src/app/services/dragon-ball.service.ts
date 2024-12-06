import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICharacter } from '../models/icharacter';

@Injectable({
  providedIn: 'root'
})
export class DragonBallService {
  private apiUrl = "https://dragonball-api.com/api";

  constructor(readonly httpClient: HttpClient) { }

  getCharacters(): Observable<ICharacter[]> {
    return this.httpClient.get<ICharacter[]>(`${this.apiUrl}/characters`);
  }

  getCharacterById(id: number): Observable<ICharacter> {
    return this.httpClient.get<ICharacter>(`${this.apiUrl}/characters/${id}`);
  }

  navigateToCharacter(id: number): string {
    return `${this.apiUrl}/characters/${id}`;
  }
  // 



  

}

  


