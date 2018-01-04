import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AlbumService {
    constructor(private http: HttpClient) {}

    getRootDirectoryItems(): Observable<any[]> {
        return this.http.get<any[]>('/api/drive');
    }

    getDirectoryItems(path: string): Observable<any[]> {
        let params = new HttpParams().set('path', path);
        return this.http.get<any[]>('/api/drive/directory', { params: params });
    }

    getAlbumDetail(path: string): Observable<any> {
        let params = new HttpParams().set('path', path);
        return this.http.get<any>('/api/drive/file', { params: params });
    }

}