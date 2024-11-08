import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DragonBallService {
  private apiUrl = 'https://dragonball-api.com/api/characters';

  constructor(private http: HttpClient) {}

  
  getCharacterById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }
}

  

//   // getCharacters(page: number = 1, limit: number = 10): Observable<any> {
//   //   const params = new HttpParams()
//   //     .set('page', page.toString())
//   //     .set('limit', limit.toString());

//   //   return this.http.get(this.apiUrl, { params });
//   // }

