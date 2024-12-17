import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private apiUrl = 'https://railway-backend-production-048d.up.railway.app/music/music/'; 

  constructor(private http: HttpClient) {}

  getMusics(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
