import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';


@Injectable()
export class NoteService {
  private api = environment.apiUrl;
    constructor(private http: HttpClient) {}

    get(id: string): Observable<any[]> {
        return this.http.get<any[]>(this.api + '/api/note/' + id);
    }

    getBundle(): Observable<any[]> {
        return this.http.get<any[]>(this.api + '/api/note');
    }

    create(path: string): Observable<any[]> {
        let params = new HttpParams().set('path', path);
        return this.http.post<any[]>(this.api + '/api/note', { params: params });
    }

    update(path: string): Observable<any[]> {
        let params = new HttpParams().set('path', path);
        return this.http.put<any[]>(this.api + '/api/note', { params: params });
    }

    delete(path: string): Observable<any[]> {
        let params = new HttpParams().set('path', path);
        return this.http.delete<any[]>(this.api + '/api/note', { params: params });
    }
}
