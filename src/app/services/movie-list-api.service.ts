import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieListApiService {

  constructor(private http: HttpClient) { }

  getLists(): Observable<any[]> {
    return this.http.get<any>(`${environment.apiUrl}lists`);
  }
}
