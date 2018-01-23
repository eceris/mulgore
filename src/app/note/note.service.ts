import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NoteService {
    constructor(private http: HttpClient) {}

    get(id: string): Observable<any[]> {
        return this.http.get<any[]>('/api/note/' + id);
    }

    getBundle(): Observable<any[]> {
        return this.http.get<any[]>('/api/note');
    }

    create(path: string): Observable<any[]> {
        let params = new HttpParams().set('path', path);
        return this.http.post<any[]>('/api/note', { params: params });
    }

    update(path: string): Observable<any[]> {
        let params = new HttpParams().set('path', path);
        return this.http.put<any[]>('/api/note', { params: params });
    }

    delete(path: string): Observable<any[]> {
        let params = new HttpParams().set('path', path);
        return this.http.delete<any[]>('/api/note', { params: params });
    }
}